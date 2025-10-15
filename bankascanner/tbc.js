import { pdf2text } from "../pdf2text";
import { left, right } from "bankascanner/lib";
const clean = (s) => s
    .replace(/\r/g, "")
    .replace(/[\u2000-\u200F]/g, "")
    .replace(/[\u2028\u2029]/g, "\n")
    .replace(/\u00A0/g, " ")
    .replace(/, ([\u10A0-\u10FF])/g, ",\n$1")
    .replace(/GL\.23S\s+\(/, "GL.23S\n(")
    .replace(/OSN\s+(\d)/, "OSN\n$1")
    .replace(/\n\s+/g, "\n")
    .replace(/\s+\n/g, "\n")
    .replace(/\n /g, "\n")
    .trim();
const parsers = {
    category: (m) => right(clean(m)),
    comment: (m) => right(clean(m)),
    currency: (m) => right(m.trim()),
    value: (m) => {
        const n = Number(m.replace(/,/g, ""));
        return isNaN(n) ? left(`failed to parse ${m}`) : right(n);
    },
    date: (m) => {
        const [d, mo, y] = m.split("/");
        const date = new Date(`${y}-${mo}-${d}`);
        return isNaN(date.getTime()) ? left(`failed to parse ${m}`) : right(date);
    },
};
const rowRegex = /(\d{2}\/\d{2}\/\d{4})\s+([\s\S]*?)\s{2,}([\s\S]*?)\s+([0-9]+\.[0-9]{2})\s+([0-9]+\.[0-9]{2})/g;
const importer = async (file) => {
    const text = await pdf2text(new Uint8Array(file));
    const openingMatch = /Opening Balance\s+([0-9]+\.[0-9]{2})/.exec(text);
    if (!openingMatch) {
        return left("failed to parse opening balance");
    }
    let previousBalance = parseFloat(openingMatch[1]);
    const headerIndex = text.indexOf("ბალანსი Balance");
    if (headerIndex === -1) {
        return left("failed to find table header");
    }
    const content = text.slice(headerIndex + "ბალანსი Balance".length);
    const outcomes = [];
    let match;
    while ((match = rowRegex.exec(content))) {
        const [, dateRaw, categoryRaw, commentRaw, amountRaw, balanceRaw] = match;
        const date = parsers.date(dateRaw);
        const category = parsers.category(categoryRaw);
        const comment = parsers.comment(commentRaw);
        const amount = parsers.value(amountRaw);
        const balance = parseFloat(balanceRaw);
        if (date.isLeft() || category.isLeft() || comment.isLeft() || amount.isLeft()) {
            const failure = { message: "failed to parse row: " + match[0] };
            outcomes.push(left(failure));
            previousBalance = balance;
            continue;
        }
        const value = balance >= previousBalance ? amount.value : -amount.value;
        previousBalance = balance;
        const operation = {
            date: date.value,
            category: category.value,
            comment: comment.value,
            value,
            currency: "USD",
        };
        outcomes.push(right(operation));
    }
    return right(outcomes);
};
const definition = {
    name: "TBC",
    version: "latest",
    run: importer,
};
export default definition;
