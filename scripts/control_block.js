const findPath = require('./find_path');
const leafHash = require('./leaf_hash');
const scriptTree = require('./script_tree');

const bufferAsHex = buffer => buffer.toString('hex');
const {concat} = Buffer;
const defaultInternalKey = '50929b74c1a04954b78b4b6035e97a5e078a5a0f28ec96d547bfee9ace803ac0';
const defaultVersion = 192;
const {from} = Buffer;
const hexAsBuffer = hex => Buffer.from(hex, 'hex');
const parity = key => key.startsWith('03') ? 1 : 0;

/** Assemble a control block for a leaf script spend

  {
    external_key: <External Public Key Hex String>
    [internal_key]: <Internal Public Key Hex String>
    leaf_script: <Leaf Script Hex String>
    [leaf_version]: <Leaf Script Version Number>
    script_branches: <Script Branches Object>
  }

  @returns
  {
    block: <Control Block Hex String>
  }
*/
module.exports = args => {
  const elements = concat([
    from([(args.leaf_version || defaultVersion) | parity(args.external_key)]),
    hexAsBuffer(args.internal_key || defaultInternalKey),
  ]);

  const tree = scriptTree({branches: args.script_branches});

  const {hash} = leafHash({
    script: args.leaf_script,
    version: args.leaf_version,
  });

  const path = concat(findPath({hash, tree}).map(hexAsBuffer).reverse());

  return {block: bufferAsHex(concat([elements, path]))};
};
