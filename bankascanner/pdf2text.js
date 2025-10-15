import { _ as i } from "./chunks/pdf-gqnf8hY1.js";
async function x(l) {
  try {
    const a = await i({ data: l }).promise, r = a.numPages;
    console.log(`Найдено страниц: ${r}`);
    let c = "";
    for (let t = 1; t <= r; t++)
      try {
        const e = await a.getPage(t), n = (await e.getTextContent()).items.filter((o) => "str" in o).map((o) => o.str).join(" ");
        n.trim() && (c += n + `

`, console.log(
          `Страница ${t}: извлечено ${n.length} символов`
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
  x as pdf2text
};
//# sourceMappingURL=pdf2text.js.map
