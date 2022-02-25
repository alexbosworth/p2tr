const {xOnlyPointAddTweak} = require('tiny-secp256k1');

const {tweakHash} = require('./../keys');

const bufferAsHex = buffer => buffer.toString('hex');
const {concat} = Buffer;
const externalKey = (key, hash) => xOnlyPointAddTweak(key, hash).xOnlyPubkey;
const {from} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const push32 = Buffer.from([32]);
const OP_1 = Buffer.from([81]);
const shortKey = key =>  key.slice(1, 33);

/** Create a SegWit V1 Output Script

  {
    [hash]: <Hash Hex String>
    internal_key: <Internal Public Key Hex String>
  }

  @returns
  {
    script: <Output Script Hex String>
  }
*/
module.exports = args => {
  const {hash} = tweakHash({hash: args.hash, public_key: args.internal_key});
  const publicKey = hexAsBuffer(args.internal_key);

  const outputKey = externalKey(shortKey(publicKey), hexAsBuffer(hash));

  return {script: bufferAsHex(concat([OP_1, push32, from(outputKey)]))};
};
