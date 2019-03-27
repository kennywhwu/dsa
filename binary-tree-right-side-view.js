// Given binary tree, return node values level by level of only right side

// https://leetcode.com/problems/binary-tree-right-side-view

function rightSideView(root) {
  if (root === null) return [];
  let queue = [[root, 0]];
  let depthCheck = null;
  let output = [];
  while (queue.length > 0) {
    let current = queue.shift();
    let [node, d] = current;
    if (depthCheck !== d) {
      depthCheck = d;
      output.push(node.val);
    }
    if (node.right !== null) queue.push([node.right, d + 1]);
    if (node.left !== null) queue.push([node.left, d + 1]);
  }
  return output;
}

module.exports = rightSideView;
