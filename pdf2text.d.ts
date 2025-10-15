/**
 * Извлекает текст из PDF файла
 * @param file - Массив байтов PDF файла
 * @returns Извлеченный текст
 */
export declare function pdf2text(file: Uint8Array): Promise<string>;
