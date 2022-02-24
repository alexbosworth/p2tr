/** Find a path to hash in a tree

  {
    hash: <Leaf Script Hash Hex String>
    tree: {
      hash: <Hash Hex String>
      left: {
        hash: <Hash Hex String>
      }
      right: {
        hash: <Hash Hex String>
      }
    }
  }

  @returns
  {
    hash: <Hash of Tree Hex Encoded String>
  }
*/
module.exports = ({hash, tree}) => {
  const {left, right} = tree;

  const findPath = (a, b) => {
    if (!a) {
      return;
    }

    if (a.hash === hash) {
      return !!b ? [b.hash] : [];
    }

    const aPath = module.exports({tree: a, hash});

    return !aPath.length ? null : !!b ? [b.hash].concat(aPath) : aPath;
  }

  return findPath(left, right) || findPath(right, left) || [];
};
