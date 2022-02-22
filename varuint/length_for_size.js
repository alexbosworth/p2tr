const lengthFor8Bit = 1;
const lengthFor16Bit = 3;
const lengthFor32Bit = 5;
const lengthFor64Bit = 9;
const markerFor16Bit = 253;
const max16Bit = 65535;
const max32Bit = 4294967295;

/** Calculate byte length for encoding a varuint size

  {
    number: <Number to Encode String>
  }

  @returns
  {
    count: <Byte Length Number>
  }
*/
module.exports = ({number}) => {
  if (number < markerFor16Bit) {
    return {count: lengthFor8Bit};
  }

  if (number <= max16Bit) {
    return {count: lengthFor16Bit};
  }

  if (number <= max32Bit) {
    return {count: lengthFor32Bit};
  }

  return {count: lengthFor64Bit};
};
