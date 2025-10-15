import { a as i, _ as p } from "./chunks/pdf-DLwXJBxB.js";
function m(o) {
  return new Worker(
    "/assets/pdf.worker-DZfbeEAW.js",
    {
      name: o?.name
    }
  );
}
i.workerSrc = m;
async function f(o) {
  try {
    const a = await p({ data: o }).promise, c = a.numPages;
    console.log(`Найдено страниц: ${c}`);
    let g = "";
    for (let t = 1; t <= c; t++)
      try {
        const e = await a.getPage(t), n = (await e.getTextContent()).items.filter((r) => "str" in r).map((r) => r.str).join(" ");
        n.trim() && (g += n + `

`, console.log(
          `Страница ${t}: извлечено ${n.length} символов`
        )), e.cleanup();
      } catch (e) {
        console.warn(
          `Предупреждение: не удалось обработать страницу ${t}: ${e.message}`
        );
      }
    const l = g.trim();
    return console.log(`Всего извлечено символов: ${l.length}`), l;
  } catch (s) {
    throw new Error(`Ошибка при обработке PDF: ${s.message}`);
  }
}
export {
  f as pdf2text
};
//# sourceMappingURL=pdf2text.js.map
