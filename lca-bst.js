// Given binary search tree, return lowest common ancestor (including target node)

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree

function lowestCommonAncestor(root, p, q) {
  if(p.val === q.val) return p
  if(root.val === p.val || root.val === q.val || root === null) return root

  function _DFS(node, p, q){
      if(node.val > p.val && node.val > q.val){
          return _DFS(node.left,p,q)
      } else if(node.val < p.val && node.val < q.val){
          return _DFS(node.right,p,q)
      } else {
          return node
      }
  }

  return _DFS(root,p,q)
};

module.exports = lowestCommonAncestor