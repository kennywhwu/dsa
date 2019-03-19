// Given binary trees s and t, return true if t is an exact subtree of s

var isSubtree = function(s, t) {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;

  function _sameTree(currentS, currentT) {
    if (currentS === null && currentT === null) return true;
    if (currentS === null || currentT === null || currentS.val !== currentT.val)
      return false;
    return (
      _sameTree(currentS.left, currentT.left) &&
      _sameTree(currentS.right, currentT.right)
    );
  }

  function _traverse(current) {
    if (current === null) return false;
    if (current.val === t.val) {
      if (_sameTree(current, t)) return true;
    }
    return _traverse(current.left) || _traverse(current.right);
  }

  return _traverse(s);
};

module.exports = isSubtree;
