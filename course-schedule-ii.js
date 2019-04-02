// Given number of courses and list of prerequisites, return order of courses to take

// https://leetcode.com/problems/course-schedule-ii

function findOrder(numCourses, prerequisites) {
  let adjacencyList = {};
  for (let pre of prerequisites) {
    let [target, req] = pre;
    if (adjacencyList[req]) {
      adjacencyList[req].push(target);
    } else {
      adjacencyList[req] = [target];
    }
  }

  let visited = new Set();
  let stack = [];
  let cycle = false;

  function _DFS(node, localVisited) {
    visited.add(node);
    localVisited.add(node);
    let courses = adjacencyList[node];
    if (courses) {
      courses.forEach(e => {
        if (localVisited.has(e)) {
          cycle = true;
        }
        if (!visited.has(e)) {
          localVisited.add(e);
          _DFS(e, localVisited);
          localVisited.delete(e);
        }
      });
    }
    stack.push(node);
  }

  for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
      let localVisited = new Set();
      _DFS(i, localVisited);
    }
  }

  return cycle ? [] : stack.reverse();
}

module.exports = findOrder;
