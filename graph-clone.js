// Given graph, return root node of deep copy

// https://leetcode.com/problems/clone-graph

class Node {
  constructor(val, neighbors) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

var cloneGraph = function(node) {
  let cloneRef = {};
  let visited = new Set().add(node.val);
  let queue = [node];

  while (queue.length > 0) {
    let current = queue.shift();
    let clone1;
    if (cloneRef[current.val]) {
      clone1 = cloneRef[current.val];
    } else {
      clone1 = new Node(current.val, []);
      cloneRef[current.val] = clone1;
    }
    current.neighbors.forEach(v => {
      if (!visited.has(v.val)) {
        let clone2 = new Node(v.val, []);
        visited.add(v.val);
        cloneRef[v.val] = clone2;
        queue.push(v);
      }
      cloneRef[current.val].neighbors.push(cloneRef[v.val]);
    });
  }

  return cloneRef[node.val];
};

module.exports = cloneGraph;
