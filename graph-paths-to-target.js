// Given a directed, acyclic graph, return all paths from 0 to last node (graph.length-1)

// https://leetcode.com/problems/all-paths-from-source-to-target

var allPathsSourceTarget = function(graph) {
  let paths = [];
  let currentPath = [0];
  let visited = new Set().add(0);

  function _DFS(node) {
    if (node === graph.length - 1) {
      paths.push([...currentPath]);
    } else {
      graph[node].forEach(e => {
        if (!visited.has(e)) {
          visited.add(e);
          currentPath.push(e);
          _DFS(e);
          visited.delete(e);
          currentPath.pop();
        }
      });
    }
  }
  _DFS(0);
  return paths;
};

module.exports = allPathsSourceTarget;
