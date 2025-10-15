import { pdf2text as b } from "../pdf2text.js";
import { l as t } from "../chunks/index-Dj8nbEF-.js";
const d = (e) => e.replace(/\r/g, "").replace(/[\u2000-\u200F]/g, "").replace(/[\u2028\u2029]/g, `
`).replace(/\u00A0/g, " ").replace(/, ([\u10A0-\u10FF])/g, `,
$1`).replace(/GL\.23S\s+\(/, `GL.23S
(`).replace(/OSN\s+(\d)/, `OSN
$1`).replace(/\n\s+/g, `
`).replace(/\s+\n/g, `
`).replace(/\n /g, `
`).trim(), o = {
  category: (e) => t.right(d(e)),
  comment: (e) => t.right(d(e)),
  currency: (e) => t.right(e.trim()),
  value: (e) => {
    const a = Number(e.replace(/,/g, ""));
    return isNaN(a) ? t.left(`failed to parse ${e}`) : t.right(a);
  },
  date: (e) => {
    const [a, c, n] = e.split("/"), r = /* @__PURE__ */ new Date(`${n}-${c}-${a}`);
    return isNaN(r.getTime()) ? t.left(`failed to parse ${e}`) : t.right(r);
  }
}, L = /(\d{2}\/\d{2}\/\d{4})\s+([\s\S]*?)\s{2,}([\s\S]*?)\s+([0-9]+\.[0-9]{2})\s+([0-9]+\.[0-9]{2})/g, R = async (e) => {
  const a = await b(new Uint8Array(e)), c = /Opening Balance\s+([0-9]+\.[0-9]{2})/.exec(a);
  if (!c)
    return t.left("failed to parse opening balance");
  let n = parseFloat(c[1]);
  const r = a.indexOf("ბალანსი Balance");
  if (r === -1)
    return t.left("failed to find table header");
  const m = a.slice(r + 15), s = [];
  let l;
  for (; l = L.exec(m); ) {
    const [, h, w, v, y, x] = l, p = o.date(h), g = o.category(w), f = o.comment(v), i = o.value(y), u = parseFloat(x);
    if (p.isLeft() || g.isLeft() || f.isLeft() || i.isLeft()) {
      const $ = { message: "failed to parse row: " + l[0] };
      s.push(t.left($)), n = u;
      continue;
    }
    const N = u >= n ? i.value : -i.value;
    n = u;
    const S = {
      date: p.value,
      category: g.value,
      comment: f.value,
      value: N,
      currency: "USD"
    };
    s.push(t.right(S));
  }
  return t.right(s);
}, O = {
  name: "TBC",
  version: "latest",
  run: R
};
export {
  O as default
};
//# sourceMappingURL=tbc.js.map
