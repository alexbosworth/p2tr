const {createHash} = require('crypto');

const bufferAsHex = buffer => buffer.toString('hex');
const {concat} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex || '', 'hex');
const keyData = key => Buffer.from(key, 'hex').slice(1, 33);
const sha256 = preimage => createHash('sha256').update(preimage).digest();
const tweakTag = 'e80fe1639c9ca050e3af1b39c143c63e429cbceb15d940fbb5c5a1f4af57c5e9';

/** Tweak hash

  {
    [hash]: <Hash Hex String>
    public_key: <Public Key Hex String>
  }

  @returns
  {
    hash: <Tagged Tweak Hash Hex String>
  }
*/
module.exports = args => {
  // Elements to hash over
  const elements = [
    hexAsBuffer(tweakTag),
    hexAsBuffer(tweakTag),
    keyData(args.public_key),
    hexAsBuffer(args.hash),
  ];

  return {hash: bufferAsHex(sha256(concat(elements)))};
};
