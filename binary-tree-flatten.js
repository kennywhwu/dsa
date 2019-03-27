// Given a binary tree, flatten into linked list preorder, all links to the right

// https://leetcode.com/problems/flatten-binary-tree-to-linked-list

function flatten(root) {
  if (root === null) return [];
  let list = [];
  function _DFS(node) {
    if (node === null) return;
    list.push(node);
    _DFS(node.left);
    _DFS(node.right);
  }
  _DFS(root);
  for (let i = 0; i < list.length - 1; i++) {
    list[i].left = null;
    list[i].right = list[i + 1];
  }
  return root;
}

module.exports = flatten;
