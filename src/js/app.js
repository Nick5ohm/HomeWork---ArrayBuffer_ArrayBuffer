import ArrayBufferConverter, { getBuffer } from './ArrayBufferConverter';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());

console.log(`Раскодированная строка: ${converter.toString()}`);
