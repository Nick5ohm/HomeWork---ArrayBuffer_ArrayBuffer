import ArrayBufferConverter, { getBuffer } from '../ArrayBufferConverter'; 

describe('ArrayBufferConverter class', () => {
  test('should load buffer and convert it to string correctly', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    
    const expectedString = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    expect(converter.toString()).toBe(expectedString);
  });

  test('should return empty string if no buffer loaded', () => {
    const converter = new ArrayBufferConverter();
    expect(converter.toString()).toBe('');
  });
});
