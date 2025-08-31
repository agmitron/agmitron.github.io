// pdf2text.ts - Функция для извлечения текста из PDF (на основе официального примера)
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
/**
 * Извлекает текст из PDF файла
 * @param file - Массив байтов PDF файла
 * @returns Извлеченный текст
 */
export async function pdf2text(file) {
    try {
        // Загружаем PDF документ из Uint8Array
        const loadingTask = getDocument({ data: file });
        const doc = await loadingTask.promise;
        const numPages = doc.numPages;
        console.log(`Найдено страниц: ${numPages}`);
        let fullText = "";
        // Обрабатываем страницы последовательно
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            try {
                const page = await doc.getPage(pageNum);
                const textContent = await page.getTextContent();
                // Извлекаем текст из элементов страницы
                const strings = textContent.items
                    .filter((item) => "str" in item)
                    .map((item) => item.str);
                const pageText = strings.join(" ");
                if (pageText.trim()) {
                    fullText += pageText + "\n\n";
                    console.log(`Страница ${pageNum}: извлечено ${pageText.length} символов`);
                }
                // Освобождаем ресурсы страницы
                page.cleanup();
            }
            catch (pageError) {
                console.warn(`Предупреждение: не удалось обработать страницу ${pageNum}: ${pageError.message}`);
            }
        }
        const result = fullText.trim();
        console.log(`Всего извлечено символов: ${result.length}`);
        return result;
    }
    catch (error) {
        throw new Error(`Ошибка при обработке PDF: ${error.message}`);
    }
}
