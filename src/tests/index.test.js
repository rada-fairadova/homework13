import ArrayBufferConverter from '../index.js';
import { getBuffer } from '../getBuffer.js';

describe('ArrayBufferConverter', () => {
  let converter;

  beforeEach(() => {
    converter = new ArrayBufferConverter();
  });

  test('should load buffer', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('should convert buffer to string', () => {
    const buffer = getBuffer();
    converter.load(buffer);
    const result = converter.toString();
    expect(result).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('should throw error when no buffer loaded', () => {
    expect(() => converter.toString()).toThrow('No buffer loaded');
  });
});
