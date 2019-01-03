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

  // return array of all paths from start to target node using DFS
  pathsDFS(start, target) {
    let paths = [];
    let path = [start.value];
    let visited = new Set();

    function _DFS(node, target) {
      if (node === target) {
        paths.push([...path]);
        return;
      }
      visited.add(node);
      node.adjacent.forEach(v => {
        if (!visited.has(v)) {
          path.push(v.value);
          _DFS(v, target);
          path.pop();
        }
      });
      visited.delete(node);
    }

    _DFS(start, target);
    return paths;
  }

  // return array of all paths from start to target node using BFS (will always be shortest path(s))
  pathsBFS(start, target) {
    let paths = [];
    let path = [start.value];
    let visited = new Set();
    let queue = [[start]];
    let current;
    while (queue.length) {
      let currentPath = queue.shift();
      let currentNode = currentPath[currentPath.length - 1];
      if (currentNode === target) {
        paths.push(currentPath.map(node => node.value));
      }
      visited.add(currentNode);
      currentNode.adjacent.forEach(v => {
        if (!visited.has(v)) {
          queue.push([...currentPath, v]);
        }
      });
    }
    return paths;
  }

  // Return true if any cycle in graph, else return false
  hasCycle() {
    let output = false;
    for (let start of this.nodes) {
      if (!output) {
        let current = start;
        let visited = new Set();
        function _hasCycle(current, start) {
          if (!current) return;
          visited.add(current);
          current.adjacent.forEach(v => {
            if (v === start) {
              output = true;
              return;
            }
            if (!visited.has(v)) _hasCycle(v, start);
          });
        }
        _hasCycle(current, start);
      }
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

// Return true if no cycles in graph, else return false (from LeetCode)
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

// // Return true if no cycles in graph, else return false (from LeetCode)
// function findOrder(numCourses, prerequisites) {
//   let obj = {};
//   for (let i = 0; i < prerequisites.length; i++) {
//     if (obj[prerequisites[i][0]]) {
//       obj[prerequisites[i][0]].push(prerequisites[i][1].toString());
//     } else {
//       obj[prerequisites[i][0]] = [prerequisites[i][1].toString()];
//     }
//   }
//   let visited = new Set();
//   let cycle = true;

//   function _hasCycle(node, key, path) {
//     if (!node) return;
//     visited.add(node);
//     path.push(node);
//     if (!obj[node]) return;
//     obj[node].forEach(v => {
//       if (v === key) {
//         // cycle = false;
//         return false;
//       }
//       if (!visited.has(v)) _hasCycle(v, key, path);
//     });
//   }

//   for (let key in obj) {
//     if (cycle) {
//       let path = [];
//       if (!_hasCycle(key, key, path)) return false;
//       if (path.length === numCourses) return true;
//       visited = new Set();
//     }
//   }
// }

// Return number of islands in passed in grid (from LeetCode)
function numIslands(grid) {
  function numIslandsDFS(grid, i, j) {
    if (
      !grid ||
      i < 0 ||
      j < 0 ||
      i >= grid.length ||
      j >= grid[0].length ||
      +grid[i][j] !== 1
    )
      return;
    grid[i][j] = 0;
    numIslandsDFS(grid, i - 1, j);
    numIslandsDFS(grid, i + 1, j);
    numIslandsDFS(grid, i, j - 1);
    numIslandsDFS(grid, i, j + 1);
  }
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (+grid[i][j] === 1) {
        numIslandsDFS(grid, i, j);
        count++;
      }
    }
  }

  return count;
}

// Return distances of start node to every other node (all edge weights are 6) (from HackerRank)
function shortestReach(n, m, edges, s) {
  let adjList = {};
  for (let i = 1; i <= n; i++) {
    adjList[i] = [];
  }
  edges.forEach(edge => {
    adjList[edge[0]].push(edge[1]);
    adjList[edge[1]].push(edge[0]);
  });

  let distances = [];
  let currentSum = 0;
  let visited = new Set();
  function _DFS(node, target) {
    if (node === target) {
      distances.push(currentSum);
      found = true;
      return true;
    }
    visited.add(node);
    adjList[node].forEach(v => {
      if (!visited.has(v)) {
        currentSum += 6;
        _DFS(v, target);
        currentSum -= 6;
        visited.delete(v);
      }
    });
  }

  let found = false;
  for (let i = 1; i <= n; i++) {
    if (i !== s) {
      _DFS(s, i);
      if (!found) distances.push(-1);
    }
    found = false;
  }
  return distances;
}

// // Return distances of start node to every other node (all edge weights are 6) (from HackerRank)
// function shortestReach(nodeCount, edgeCount, edges, start) {
//   let adjList = {};
//   // initiate adjacency list with nodes
//   for (let i = 1; i <= nodeCount; i++) {
//     adjList[i] = [];
//   }
//   // add edges to nodes adjacency list
//   edges.forEach(edge => {
//     adjList[edge[0]].push(edge[1]);
//     adjList[edge[1]].push(edge[0]);
//   });

//   // bfs traversal
//   let output = [];
//   for (let i = 1; i <= nodeCount; i++) {
//     if (i !== start) {
//       let queue = [start];
//       let distance = 0;
//       let visited = new Set();
//       while (queue.length) {
//         let current = queue.shift();
//         console.log('i', i, 'current', current);
//         if (current === i) break;
//         adjList[current].forEach(v => {
//           if (!visited.has(v)) {
//             visited.add(v);
//             queue.push(v);
//           }
//         });
//         distance += 6;
//       }
//       output.push(distance);
//     }
//   }
//   return output;
// }

// function findOrder(numCourses,prerequisites){
//   let paths = [];
//   let path = [];
//   let visited = new Set();

//   function _DFS(node, target){
//     // if(node[1] === target[1]) return false;
//     if(visited.size === numCourses){
//       paths.push(path);
//     } else {
//       return;
//     }
//     prerequisites.forEach(v=>{
//       if(v[0]===target[0]) return;
//     )

//   }

//   for(let i = 0; i < prerequisites.length;i++){
//     _DFS(i, i)
//   }
// }

// Return true if directed graph has cycle (cannot be completed due to cyclic dependencies) (from CodeSignal)
function hasDeadlock(connections) {
  let cycleArr = [];
  function _hasCycle(n) {
    if (n in cycleArr) return cycleArr[n];
    cycleArr[n] = true;
    cycleArr[n] = connections[n].some(_hasCycle);
  }
  return connections.some((e, i) => _hasCycle(i));
}

// Return true if all nodes in graph are connected (from CodeSignal)
function isConnected(connections) {
  let visited = new Set();
  function _connected(n) {
    visited.add(n);
    if (visited.size === connections.length) return true;
    for (let i = 0; i < connections[n].length; i++) {
      if (connections[n][i] === 1 && !visited.has(i) && _connected(i))
        return true;
    }
  }
  if (_connected(0)) return true;
  return false;
}

// Return number of connections in graph that if broken, would result in graph no longer being connected (from CodeSignal)
function singlePointOfFailure(connections) {
  let count = 0;
  for (let i = 0; i < connections.length; i++) {
    for (let j = i; j < connections[i].length; j++) {
      if (connections[i][j] === 1) {
        connections[i][j] = 0;
        connections[j][i] = 0;
        if (!isConnected(connections)) count++;
        connections[i][j] = 1;
        connections[j][i] = 1;
      }
    }
  }
  return count;
}

// Returns minimum number of colors needed for graph to not have any adjacent vertices sharing a color
function colorMap(arr) {
  let colorRef = [];
  function _isSafe(node, color) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(node) && color === colorRef[i]) {
        return false;
      }
    }
    return true;
  }
  function _graphColors(node) {
    let color = 1;
    while (node < arr.length) {
      if (_isSafe(node, color)) {
        colorRef[node] = color;
        if (node + 1 < arr.length) {
          return _graphColors(node + 1);
        } else {
          return Math.max(...colorRef);
        }
      }
      color++;
    }
  }
  return _graphColors(0);
}

// Return minimum number of days needed for classes to come to feed animals if they cannot overlap animals in a day (-1 if > 5) (from CodeSignal)
function feedingTime(classes) {
  let adj = [];
  for (let i = 0; i < classes.length; i++) {
    adj[i] = [i, new Set()];
  }

  for (let i = 0; i < classes.length; i++) {
    for (let j = 0; j < classes[i].length; j++) {
      for (let k = i + 1; k < classes.length; k++) {
        if (classes[k].some(animal => animal === classes[i][j])) {
          adj[i][1].add(k);
          adj[k][1].add(i);
        }
      }
    }
  }

  adj.sort((a, b) => b[1].size - a[1].size);
  console.log(adj);
  let visited = new Set();
  let colorRef = [];
  function _isSafe(node, color) {
    for (let i = 0; i < adj.length; i++) {
      if (adj.find(e => e[0] === i)[1].has(node) && color === colorRef[i]) {
        return false;
      }
    }
    return true;
  }

  function _graphColors(node, i) {
    visited.add(node);
    let color = 1;
    while (node < adj.length) {
      if (_isSafe(node, color)) {
        colorRef[node] = color;
        if (i + 1 < adj.length) {
          return _graphColors(adj[i + 1][0], i + 1);
        } else {
          return Math.max(...colorRef);
        }
      }
      color++;
    }
  }

  let max = 0;
  for (let i = 0; i < adj.length; i++) {
    if (!visited.has(adj[i][0])) {
      max = Math.max(max, _graphColors(adj[i][0], i));
    }
  }
  return max <= 5 ? max : -1;
}

module.exports = {
  Graph,
  Node,
  shortestPath,
  canFinish,
  numIslands,
  shortestReach,
  // findOrder,
  hasDeadlock,
  isConnected,
  singlePointOfFailure,
  feedingTime,
  colorMap,
};
