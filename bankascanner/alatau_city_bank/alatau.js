import { l as x } from "../bankascanner/chunks/index-Dj8nbEF-.js";
import { _ as S } from "../bankascanner/chunks/pdf-DLwXJBxB.js";
const Z = (f) => f.replace(
  /(?<!\d)(\d{1,3}(?: \d{3})+(?:\.\d+)?)(?!\d)/g,
  (m) => m.replace(/ /g, "")
), b = async (f) => {
  try {
    const m = new Uint8Array(f), y = await S({ data: m }).promise, h = [];
    for (let t = 1; t <= y.numPages; t++) {
      const a = (await (await y.getPage(t)).getTextContent()).items.filter((o) => "str" in o).map((o) => ({
        str: o.str,
        x: o.transform[4],
        y: o.transform[5]
      })), s = /* @__PURE__ */ new Map();
      for (const o of a) {
        const c = Math.round(o.y), r = s.get(c) ?? [];
        r.push(o), s.set(c, r);
      }
      const p = [...s.entries()].sort((o, c) => c[0] - o[0]).map(
        ([o, c]) => c.sort((r, g) => r.x - g.x).map((r) => r.str).join(" ").trim()
      );
      h.push(...p);
    }
    const A = h.map(Z), _ = /^(\d{2}\.\d{2}\.\d{4})\s+(\w+)\s+(.*)\s+(\d+(?:\.\d+)?)\s+([A-Z]{3})\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)/, $ = /^KZ[0-9A-Z]+\s+([A-Z]{3})$/;
    let u = null, i = null;
    const l = [], d = () => {
      i && (l.push(i), i = null);
    }, C = /^(Transaction\s+Income in account\s+Expense in|Date\s+Operation|Details\s+Amount|currency\s+currency\s+account currency)/;
    for (const t of A) {
      const e = t.trim();
      if (C.test(e)) continue;
      const n = $.exec(e);
      if (n) {
        d(), u = n[1];
        continue;
      }
      if (!u) continue;
      const a = _.exec(e);
      if (a) {
        d();
        const [, s, p, o, c, r, g, D] = a;
        i = {
          date: s,
          category: p,
          comment: o.trim(),
          amount: c,
          transCur: r,
          income: g,
          expense: D,
          currency: u
        };
        continue;
      }
      i && (/^Account transactions/.test(e) ? (d(), u = null) : i.comment += " " + e);
    }
    d();
    const F = [];
    for (let t = 0; t < l.length; t++) {
      let e = l[t];
      const n = l[t + 1];
      if (n && e.date === n.date && e.category === n.category && e.comment === n.comment && e.currency === n.currency && e.amount === n.amount && (parseFloat(e.income) > 0 && parseFloat(n.expense) > 0 || parseFloat(e.expense) > 0 && parseFloat(n.income) > 0)) {
        const a = parseFloat(e.income) + parseFloat(n.income), s = parseFloat(e.expense) + parseFloat(n.expense);
        e = {
          ...e,
          income: s > 0 ? "0" : a.toString(),
          expense: s > 0 ? s.toString() : "0"
        }, t++;
      }
      F.push(e);
    }
    const w = [];
    for (const t of F) {
      const [e, n, a] = t.date.split("."), s = parseFloat(t.income), p = parseFloat(t.expense), o = parseFloat((s - p).toFixed(2)), c = {
        date: /* @__PURE__ */ new Date(`${a}-${n}-${e}`),
        category: t.category,
        comment: t.comment.trim(),
        value: o,
        currency: t.currency
      };
      w.push(x.right(c));
    }
    return x.right(w);
  } catch (m) {
    return x.left(`failed to parse pdf: ${m.message}`);
  }
}, k = {
  name: "Alatau City Bank",
  version: "latest",
  run: b
};
export {
  k as default
};
//# sourceMappingURL=alatau.js.map
