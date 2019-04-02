// Given number of nodes and list of edges, return true if graph is a valid tree (ie. no cycles, all nodes connected)

// https://leetcode.com/problems/graph-valid-tree

function validTree(n, edges) {
  let parents = [];
  for (let i = 0; i < n; i++) {
    parents[i] = i;
  }
  for (let edge of edges) {
    let [parent, child] = edge;
    while (parent !== parents[parent]) parent = parents[parent];
    while (child !== parents[child]) child = parents[child];
    if (child === parent) return false;
    parents[child] = parent;
  }
  return edges.length === n - 1 ? true : false;
}

module.exports = validTree;
