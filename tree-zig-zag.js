// Given binary tree, return list of value in zig-zag level order

// https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/

// Two stacks

// function zigZag(root) {
//   if (root === null) return [];
//   if (root.left === null && root.right === null) return [root];

//   let stack1 = [root];
//   let stack2 = [];
//   let output = [];
//   while (stack1.length > 0 || stack2.length > 0) {
//     while (stack1.length > 0) {
//       let current = stack1.pop();
//       output.push(current.val);
//       if (current.left) stack2.push(current.left);
//       if (current.right) stack2.push(current.right);
//     }
//     while (stack2.length > 0) {
//       let current = stack2.pop();
//       output.push(current.val);
//       if (current.right) stack1.push(current.right);
//       if (current.left) stack1.push(current.left);
//     }
//   }
//   return output;
// }

//BFS

function zigZag(root) {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root];
  let output = [];
  let depth = 0;
  let counter = 1;
  let queue = [root];
  while (queue.length > 0) {
    let current;
    if (depth % 2 === 0) {
      current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    } else {
      current = queue.pop();
      if (current.right) queue.unshift(current.right);
      if (current.left) queue.unshift(current.left);
    }
    output.push(current.val);
    counter--;
    if (counter === 0) {
      counter = queue.length;
      depth += 1;
    }
  }
  return output;
}

module.exports = zigZag;
