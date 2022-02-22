const {createHash} = require('crypto');

const branchTag = '1941a1f2e56eb95fa2a9f194be5c01f7216f33ed82b091463490d05bf516a015';
const bufferAsHex = buffer => buffer.toString('hex');
const {compare} = Buffer;
const {concat} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const sha256 = preimage => createHash('sha256').update(preimage).digest();

/** Hash for a branch in the scripts tree

  {
    hashes: [<Left Hash Hex String>, <Right Hash Hex String>]
  }

  @returns
  {
    hash: <Branch Hash Hex String>
  }
*/
module.exports = args => {
  const [left, right] = args.hashes.map(hexAsBuffer).sort(compare);

  // Elements to hash over
  const elements = [
    hexAsBuffer(branchTag),
    hexAsBuffer(branchTag),
    left,
    right,
  ];

  return {hash: bufferAsHex(sha256(concat(elements)))};
};
