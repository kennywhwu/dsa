// Given binary tree, return maximum distance between two nodes

// https://leetcode.com/problems/diameter-of-binary-tree

function diameterOfBinaryTree(root) {
  if (root === null) return 0;
  let max = 0;
  function _DFS(node) {
    if (node === null) return -1;
    let left = _DFS(node.left) + 1;
    let right = _DFS(node.right) + 1;
    let sum = left + right;
    max = Math.max(max, sum);
    return Math.max(left, right);
  }
  _DFS(root);
  return max;
}

module.exports = diameterOfBinaryTree;
