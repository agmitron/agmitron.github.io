import { a as i, b as g, _ as m } from "./chunks/pdf-Dau46TMA.js";
function _(o) {
  return new Worker(
    "/assets/pdf.worker-DZfbeEAW.js",
    {
      name: o?.name
    }
  );
}
g.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${i}/pdf.worker.js`;
window.pdfjsWorker = _;
async function k(o) {
  try {
    const a = await m({ data: o }).promise, c = a.numPages;
    console.log(`Найдено страниц: ${c}`);
    let p = "";
    for (let e = 1; e <= c; e++)
      try {
        const t = await a.getPage(e), r = (await t.getTextContent()).items.filter((n) => "str" in n).map((n) => n.str).join(" ");
        r.trim() && (p += r + `

`, console.log(
          `Страница ${e}: извлечено ${r.length} символов`
        )), t.cleanup();
      } catch (t) {
        console.warn(
          `Предупреждение: не удалось обработать страницу ${e}: ${t.message}`
        );
      }
    const l = p.trim();
    return console.log(`Всего извлечено символов: ${l.length}`), l;
  } catch (s) {
    throw new Error(`Ошибка при обработке PDF: ${s.message}`);
  }
}
export {
  k as pdf2text
};
//# sourceMappingURL=pdf2text.js.map
