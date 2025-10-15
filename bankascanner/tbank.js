import { l as r } from "../chunks/index-Dj8nbEF-.js";
import { pdf2text as x } from "../pdf2text.js";
const b = (e) => {
  const [a, t, s] = e.split("."), n = /* @__PURE__ */ new Date(`${s}-${t}-${a}`);
  return isNaN(n.getTime()) ? r.left(`failed to parse ${e}`) : r.right(n);
}, w = /(\d{2}\.\d{2}\.\d{4}) \d{2}:\d{2} (\d{2}\.\d{2}\.\d{4}) \d{2}:\d{2} ([+-]\d[\d\s]*\.\d{2})\s+([^\d\s])\s+([+-]\d[\d\s]*\.\d{2})\s+([^\d\s])\s+(.+?)(?:\s(\d{4}))?(?= \d{2}\.\d{2}\.\d{4} \d{2}:\d{2}|$)/g, R = {
  "₽": "RUB",
  $: "USD",
  "€": "EUR"
}, $ = "Date and time of the transaction Date of processing of the transaction Transaction amount and its currency Transaction amount in the card currency Transaction description   Card number ", k = {
  "internal transfer": /internal transfer/i,
  "intrabank transfer": /intrabank transfer/i,
  "external transfer": /external transfer/i,
  replenishment: /replenishment/i,
  "bank service payment": /bank service payment/i
}, v = (e) => {
  for (const [a, t] of Object.entries(k))
    if (t.test(e))
      return a;
  return "other";
}, D = async (e) => {
  let t = (await x(new Uint8Array(e))).split($).slice(1).join(" ");
  const s = t.indexOf(" 66 736,00");
  s !== -1 && (t = t.slice(0, s)), t = t.trim();
  const n = [];
  let o;
  for (; o = w.exec(t); ) {
    const [, l, , , , f, i, p] = o, c = b(l), d = parseFloat(f.replace(/\s/g, "")), m = p.trim(), u = v(m), y = R[i] ?? i;
    if (c.isLeft() || isNaN(d)) {
      const h = { message: "failed to parse row: " + o[0] };
      n.push(r.left(h));
      continue;
    }
    const g = {
      date: c.value,
      category: u,
      comment: m,
      value: d,
      currency: y
    };
    n.push(r.right(g));
  }
  return r.right(n);
}, U = {
  name: "tbank",
  version: "latest",
  run: D
};
export {
  U as default
};
//# sourceMappingURL=tbank.js.map
