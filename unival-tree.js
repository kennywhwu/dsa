// Given a binary tree, return true if all node values are the same

function isUnival(node) {
  if (node === null) return false;
  if (node.left === null && node.right === null) return true;
  let check = node.val;
  function _traverse(current) {
    if (current === null) return true;
    if (current.val !== check) return false;
    return _traverse(current.left) && _traverse(current.right);
  }

  return _traverse(node);
}

function countUnival(node) {
  if (node === null) return 0;
  if (node.left === null && node.right === null) return 1;

  function _traverse(current, count) {
    if (current === null) return true;
    let left = _traverse(current.left, count);
    let right = _traverse(current.right, count);
    if (left && right) {
      if (current.left !== null && current.left.val !== current.val) {
        return false;
      }
      if (current.right !== null && current.right.val !== current.val) {
        return false;
      }
      count[0]++;
      return true;
    }
  }

  let subtrees = [0];
  _traverse(node, subtrees);
  return subtrees[0];
}

module.exports = {
  isUnival,
  countUnival,
};
