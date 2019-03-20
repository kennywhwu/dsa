// Given binary tree and target node, return sibling node value

function siblingNode(root, target) {
  if (root === null || root.val === target) return null;
  let depth, sibling, found;
  function _inOrder(node, d) {
    if (!found) {
      if (node.left) _inOrder(node.left, d + 1);
      if (node.val === target) {
        depth = d;
        return;
      }
      if (d === depth && !sibling) {
        sibling = node.val;
        found = true;
      }
      if (node.right) _inOrder(node.right, d + 1);
    }
  }
  _inOrder(root, 0);
  return sibling ? sibling : null;
}

module.exports = siblingNode;
