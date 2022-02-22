const lengthForSize = require('./length_for_size');

const {alloc} = Buffer;
const bufferAsHex = buffer => buffer.toString('hex');
const lengthFor16Bit = 3;
const lengthFor32Bit = 5;
const lengthFor64Bit = 9;
const markerFor16Bit = 253;
const markerFor32Bit = 254;
const markerFor64Bit = 255;
const markerLength = 1;

/** Encode a byte size for a script

  {
    number: <Number to Encode String>
  }

  @returns
  {
    encoded: <Encoded Size Hex String>
  }
*/
module.exports = ({number}) => {
  const buffer = alloc(lengthForSize({number}).count);

  switch (buffer.length) {
  case lengthFor16Bit:
    buffer.writeUInt8(markerFor16Bit);
    buffer.writeUInt16LE(number, markerLength);
    break;

  case lengthFor32Bit:
    buffer.writeUInt8(markerFor32Bit);
    buffer.writeUInt32LE(number, markerLength);
    break;

  case lengthFor64Bit:
    buffer.writeUInt8(markerFor64Bit);
    buffer.writeBigInt64LE(BigInt(number), markerLength);

  default:
    buffer.writeUInt8(number);
    break;
  }

  return {encoded: bufferAsHex(buffer)};
};
