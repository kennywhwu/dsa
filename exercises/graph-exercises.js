// Graph data structure composed of set of vertices
// Vertices hold their own value and adjacency list of neighbor vertices

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
    return this;
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertices) {
    vertices.forEach(v => this.nodes.add(v));
    return this;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    if (!this.nodes.has(v1) || !this.nodes.has(v2)) return;
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
    return this;
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addDiredctedEdge(v1, v2) {
    if (!this.nodes.has(v1) || !this.nodes.has(v2)) return;
    v1.adjacent.add(v2);
    return this;
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    if (!this.nodes.has(v1) || !this.nodes.has(v2)) return;
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
    return this;
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    if (!this.nodes.has(vertex)) return;
    for (node in this.nodes) {
      node.adjacent = node.adjacent.filter(v => v.value !== vertex.value);
    }
    this.nodes.delete(vertex);
    return this;
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let output = [];
    let visited = new Set().add(start);
    function _DFS(node) {
      if (!node) return;
      output.push(node.value);
      visited.add(node);
      node.adjacent.forEach(v => {
        if (!visited.has(v)) {
          // visited.add(v);
          _DFS(v);
        }
      });
    }
    _DFS(start);
    return output;
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let output = [];
    let queue = [start];
    let visited = new Set().add(start);
    let current = start;
    while (queue.length) {
      if (!current) break;
      current = queue.shift();
      output.push(current.value);
      current.adjacent.forEach(v => {
        if (!visited.has(v)) {
          visited.add(v);
          queue.push(v);
        }
      });
    }
    return output;
  }
}

// Return array of shortest path between start and target vertices in graph (ie lowest number)
function shortestPath(graph, start, target) {
  let queue = [start];
  let visited = { [start.value]: null };
  let current = start;

  while (queue.length) {
    current = queue.shift();
    if (current === target) break;
    if (!current) break;

    current.adjacent.forEach(v => {
      if (visited[v.value] === undefined) {
        visited[v.value] = current.value;
        queue.push(v);
      }
    });
  }

  let path = [];
  let element = target.value;
  while (element) {
    path.push(element);
    element = visited[element];
  }

  path.reverse();
  return path;
}

// Return true if no cycles in graph, else return false
function canFinish(numCourses, prerequisites) {
  let obj = {};
  for (let i = 0; i < prerequisites.length; i++) {
    if (obj[prerequisites[i][0]]) {
      obj[prerequisites[i][0]].push(prerequisites[i][1].toString());
    } else {
      obj[prerequisites[i][0]] = [prerequisites[i][1].toString()];
    }
  }
  let visited = new Set();
  let output = true;
  function _hasCycle(node, key) {
    if (!node) return;
    visited.add(node);
    if (!obj[node]) return;
    obj[node].forEach(v => {
      if (v === key) {
        output = false;
        return;
      }
      if (!visited.has(v)) _hasCycle(v, key);
    });
  }

  for (let key in obj) {
    if (output) {
      _hasCycle(key, key);
      visited = new Set();
    }
  }
  return output;
}

module.exports = { Graph, Node, shortestPath, canFinish };
