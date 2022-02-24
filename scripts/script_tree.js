const branchHash = require('./branch_hash');
const leafHash = require('./leaf_hash');

const {isArray} = Array;

/** Hash a tree of scripts

  {
    branches: [{
      script: <Hex Encoded Script String>
      [version]: <Leaf Version Number>
    }]
  }

  @returns
  {
    hash: <Hash of Tree Hex Encoded String>
  }
*/
module.exports = ({branches}) => {
  const [leftBranch, rightBranch] = branches;

  // Exit early and recurse down when looking for a script to hash
  if (!rightBranch && isArray(leftBranch)) {
    return module.exports({branches: leftBranch});
  }

  // Exit early when arrived at a single child
  if (!rightBranch) {
    return {hash: leafHash(leftBranch).hash};
  }

  const [left, right] = branches.map(branch => {
    return module.exports({branches: [branch]});
  });

  // Join the left and right together into a branch
  const {hash} = branchHash({hashes: [left, right].map(n => n.hash)});

  return {hash, left, right};
};
