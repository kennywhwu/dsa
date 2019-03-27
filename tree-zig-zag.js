// Given binary tree, return list of value in zig-zag level order

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

function zigZag(root) {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root];

  let stack1 = [root];
  let stack2 = [];
  let output = [];
  while (stack1.length > 0 || stack2.length > 0) {
    while (stack1.length > 0) {
      let current = stack1.pop();
      output.push(current.val);
      if (current.left) stack2.push(current.left);
      if (current.right) stack2.push(current.right);
    }
    while (stack2.length > 0) {
      let current = stack2.pop();
      output.push(current.val);
      if (current.right) stack1.push(current.right);
      if (current.left) stack1.push(current.left);
    }
  }
  return output;
}

module.exports = zigZag;
