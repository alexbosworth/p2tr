const {createHash} = require('crypto');

const {encodeSize} = require('./../varuint');

const bufferAsHex = buffer => buffer.toString('hex');
const {concat} = Buffer;
const defaultVersion = 192;
const leafTag = 'aeea8fdc4208983105734b58081d1e2638d35f1cb54008d4d357ca03be78e9ee';
const {from} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const sha256 = preimage => createHash('sha256').update(preimage).digest();

/** Hash for leaf script

  {
    script: <Script Hex String>
    [version]: <Leaf Version Number>
  }

  @returns
  {
    hash: <Hash Hex String>
  }
*/
module.exports = args => {
  const script = hexAsBuffer(args.script);

  const elements = [
    hexAsBuffer(leafTag),
    hexAsBuffer(leafTag),
    from([args.version || defaultVersion]),
    hexAsBuffer(encodeSize({number: script.length}).encoded),
    script,
  ];

  return {hash: bufferAsHex(sha256(concat(elements)))};
};
