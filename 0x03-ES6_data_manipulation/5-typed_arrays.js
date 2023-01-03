export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new RangeError('Position outside range');
  }
  const buffer = new DataView(new ArrayBuffer(length));
  buffer.setInt8(position, value);
  return buffer;
}
