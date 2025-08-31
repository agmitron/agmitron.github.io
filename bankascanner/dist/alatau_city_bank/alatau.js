import { left, right } from "bankascanner/lib";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
const cleanNumber = (s) => s.replace(/(?<!\d)(\d{1,3}(?: \d{3})+(?:\.\d+)?)(?!\d)/g, (m) => m.replace(/ /g, ""));
const importer = async (file) => {
    try {
        const data = new Uint8Array(file);
        const doc = await getDocument({ data }).promise;
        const rawLines = [];
        for (let p = 1; p <= doc.numPages; p++) {
            const page = await doc.getPage(p);
            const tc = await page.getTextContent();
            const items = tc.items
                .filter((i) => "str" in i)
                .map((i) => ({
                str: i.str,
                x: i.transform[4],
                y: i.transform[5],
            }));
            const map = new Map();
            for (const it of items) {
                const y = Math.round(it.y);
                const arr = map.get(y) ?? [];
                arr.push(it);
                map.set(y, arr);
            }
            const pageLines = [...map.entries()]
                .sort((a, b) => b[0] - a[0])
                .map(([_, arr]) => arr
                .sort((a, b) => a.x - b.x)
                .map((it) => it.str)
                .join(" ")
                .trim());
            rawLines.push(...pageLines);
        }
        const lines = rawLines.map(cleanNumber);
        const dateLine = /^(\d{2}\.\d{2}\.\d{4})\s+(\w+)\s+(.*)\s+(\d+(?:\.\d+)?)\s+([A-Z]{3})\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/;
        const accRegex = /^KZ[0-9A-Z]+\s+([A-Z]{3})$/;
        let currentCurrency = null;
        let pending = null;
        const transactions = [];
        const push = () => {
            if (pending) {
                transactions.push(pending);
                pending = null;
            }
        };
        const headerRe = /^(Transaction\s+Income in account\s+Expense in|Date\s+Operation|Details\s+Amount|currency\s+currency\s+account currency)/;
        for (const raw of lines) {
            const line = raw.trim();
            if (headerRe.test(line))
                continue;
            const accMatch = accRegex.exec(line);
            if (accMatch) {
                push();
                currentCurrency = accMatch[1];
                continue;
            }
            if (!currentCurrency)
                continue;
            const m = dateLine.exec(line);
            if (m) {
                push();
                const [, date, category, merchant, amount, transCur, income, expense] = m;
                pending = {
                    date,
                    category,
                    comment: merchant.trim(),
                    amount,
                    transCur,
                    income,
                    expense,
                    currency: currentCurrency,
                };
                continue;
            }
            if (pending) {
                if (/^Account transactions/.test(line)) {
                    push();
                    currentCurrency = null;
                }
                else {
                    pending.comment += " " + line;
                }
            }
        }
        push();
        const deduped = [];
        for (let i = 0; i < transactions.length; i++) {
            let t = transactions[i];
            const next = transactions[i + 1];
            if (next &&
                t.date === next.date &&
                t.category === next.category &&
                t.comment === next.comment &&
                t.currency === next.currency &&
                t.amount === next.amount &&
                ((parseFloat(t.income) > 0 && parseFloat(next.expense) > 0) ||
                    (parseFloat(t.expense) > 0 && parseFloat(next.income) > 0))) {
                const incomeSum = parseFloat(t.income) + parseFloat(next.income);
                const expenseSum = parseFloat(t.expense) + parseFloat(next.expense);
                t = {
                    ...t,
                    income: expenseSum > 0 ? "0" : incomeSum.toString(),
                    expense: expenseSum > 0 ? expenseSum.toString() : "0",
                };
                i++;
            }
            deduped.push(t);
        }
        const outcomes = [];
        for (const tx of deduped) {
            const [d, mo, y] = tx.date.split(".");
            const income = parseFloat(tx.income);
            const expense = parseFloat(tx.expense);
            const value = parseFloat((income - expense).toFixed(2));
            const op = {
                date: new Date(`${y}-${mo}-${d}`),
                category: tx.category,
                comment: tx.comment.trim(),
                value,
                currency: tx.currency,
            };
            outcomes.push(right(op));
        }
        return right(outcomes);
    }
    catch (e) {
        return left(`failed to parse pdf: ${e.message}`);
    }
};
const definition = {
    name: "Alatau City Bank",
    version: "latest",
    run: importer,
};
export default definition;
