const {xOnlyPointAddTweak} = require('tiny-secp256k1');

const {tweakHash} = require('./../keys');

const bufferAsHex = buffer => buffer.toString('hex');
const {concat} = Buffer;
const {from} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const push32 = Buffer.from([32]);
const OP_1 = Buffer.from([81]);
const parityByte = output => Buffer.from([!output.parity ? 2 : 3]);
const shortKey = key => key.length === 32 ? key : key.slice(1, 33);
const tweakKey = (key, hash) => xOnlyPointAddTweak(key, hash);

/** Create a SegWit V1 Output Script

  {
    [hash]: <Hash Hex String>
    internal_key: <Internal Public Key Hex String>
  }

  @returns
  {
    external_key: <External Public Key Hex String>
    script: <Output Script Hex String>
  }
*/
module.exports = args => {
  const {hash} = tweakHash({hash: args.hash, public_key: args.internal_key});
  const publicKey = hexAsBuffer(args.internal_key);

  const outputKey = tweakKey(shortKey(publicKey), hexAsBuffer(hash));

  const externalKey = [parityByte(outputKey), from(outputKey.xOnlyPubkey)];

  return {
    external_key: bufferAsHex(concat(externalKey)),
    script: bufferAsHex(concat([OP_1, push32, from(outputKey.xOnlyPubkey)])),
  };
};
