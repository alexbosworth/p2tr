const {privateAdd} = require('tiny-secp256k1');
const {privateSub} = require('tiny-secp256k1');
const {signSchnorr} = require('tiny-secp256k1');

const tweakHash = require('./tweak_hash');

const add = (key, number) => privateAdd(number, key);
const bufferAsHex = buffer => buffer.toString('hex');
const {from} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const lowSign = '02';
const max = 'fffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364140';
const min = '0000000000000000000000000000000000000000000000000000000000000001';
const subtract = (key, number) => privateSub(number, key);

/** Sign with a tweaked private key

  {
    [hash]: <Tweak Hash Hex String>
    private_key: <Internal Private Key Hex String>
    public_key: <Internal Public Key Hex String>
    sign_hash: <Hash to Sign Hex String>
  }

  @returns
  {
    signature: <Tweaked Private Key Hex String>
  }
*/
module.exports = args => {
  const {hash} = tweakHash({hash: args.hash, public_key: args.public_key});
  const hashToSign = hexAsBuffer(args.sign_hash);
  const isLow = args.public_key.startsWith(lowSign);
  const privateKey = hexAsBuffer(args.private_key);

  const subtracted = subtract(privateKey, hexAsBuffer(max));

  const keyToTweak = isLow ? privateKey : add(subtracted, hexAsBuffer(min));

  const signingKey = add(keyToTweak, hexAsBuffer(hash));

  const signature = from(signSchnorr(hashToSign, signingKey));

  return {signature: bufferAsHex(signature)};
};
