import { left, right } from "bankascanner/lib";
import { pdf2text } from "../pdf2text";
const parseDate = (s) => {
    const [d, m, y] = s.split(".");
    const date = new Date(`${y}-${m}-${d}`);
    return isNaN(date.getTime()) ? left(`failed to parse ${s}`) : right(date);
};
const rowRegex = /(\d{2}\.\d{2}\.\d{4}) \d{2}:\d{2} (\d{2}\.\d{2}\.\d{4}) \d{2}:\d{2} ([+-]\d[\d\s]*\.\d{2})\s+₽\s+([+-]\d[\d\s]*\.\d{2})\s+₽\s+(.+?)(?:\s(\d{4}))?(?= \d{2}\.\d{2}\.\d{4} \d{2}:\d{2}|$)/g;
const header = "Date and time of the transaction Date of processing of the transaction Transaction amount and its currency Transaction amount in the card currency Transaction description   Card number ";
const categories = {
    "internal transfer": /internal transfer/i,
    "intrabank transfer": /intrabank transfer/i,
    "external transfer": /external transfer/i,
    "replenishment": /replenishment/i,
    "bank service payment": /bank service payment/i,
};
const detectCategory = (comment) => {
    for (const [category, regex] of Object.entries(categories)) {
        if (regex.test(comment)) {
            return category;
        }
    }
    return "other";
};
const importer = async (file) => {
    const text = await pdf2text(new Uint8Array(file));
    let content = text.split(header).slice(1).join(" ");
    const summaryIdx = content.indexOf(" 66 736,00");
    if (summaryIdx !== -1) {
        content = content.slice(0, summaryIdx);
    }
    content = content.trim();
    const outcomes = [];
    let match;
    while ((match = rowRegex.exec(content))) {
        const [, dateRaw, , , amountRaw, descriptionRaw] = match;
        const date = parseDate(dateRaw);
        const amount = parseFloat(amountRaw.replace(/\s/g, ""));
        const comment = descriptionRaw.trim();
        const category = detectCategory(comment);
        if (date.isLeft() || isNaN(amount)) {
            const failure = { message: "failed to parse row: " + match[0] };
            outcomes.push(left(failure));
            continue;
        }
        const operation = {
            date: date.value,
            category,
            comment,
            value: amount,
            currency: "RUB",
        };
        outcomes.push(right(operation));
    }
    return right(outcomes);
};
const definition = {
    name: "tbank",
    version: "latest",
    run: importer,
};
export default definition;
