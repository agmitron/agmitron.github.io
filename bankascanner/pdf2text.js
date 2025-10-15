import { a as i, _ as p } from "./bankascanner/chunks/pdf-DLwXJBxB.js";
const m = "/assets/pdf.worker-DZfbeEAW.js";
i.workerSrc = m;
async function u(l) {
  try {
    const r = await p({ data: l }).promise, a = r.numPages;
    console.log(`Найдено страниц: ${a}`);
    let c = "";
    for (let t = 1; t <= a; t++)
      try {
        const e = await r.getPage(t), o = (await e.getTextContent()).items.filter((n) => "str" in n).map((n) => n.str).join(" ");
        o.trim() && (c += o + `

`, console.log(
          `Страница ${t}: извлечено ${o.length} символов`
        )), e.cleanup();
      } catch (e) {
        console.warn(
          `Предупреждение: не удалось обработать страницу ${t}: ${e.message}`
        );
      }
    const g = c.trim();
    return console.log(`Всего извлечено символов: ${g.length}`), g;
  } catch (s) {
    throw new Error(`Ошибка при обработке PDF: ${s.message}`);
  }
}
export {
  u as pdf2text
};
//# sourceMappingURL=pdf2text.js.map
