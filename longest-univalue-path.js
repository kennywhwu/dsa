// Given binary tree, return longest path from any node to other node with same values along path

var longestUnivaluePath = function(root) {
  if (root === null) return 0;

  function _DFS(current, arr) {
    let left = current.left !== null ? _DFS(current.left, arr) : 0;
    let right = current.right !== null ? _DFS(current.right, arr) : 0;
    let aggLeft =
      current.left !== null && current.left.val === current.val ? left + 1 : 0;
    let aggRight =
      current.right !== null && current.right.val === current.val
        ? right + 1
        : 0;
    arr[0] = Math.max(arr[0], aggLeft + aggRight);
    return Math.max(aggLeft, aggRight);
  }

  let max = [0];
  _DFS(root, max);
  return max[0];
};

module.exports = longestUnivaluePath;
