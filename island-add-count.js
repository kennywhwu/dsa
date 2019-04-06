// Given size of grid and positions to add land, return array of number of islands after each addition

// https://leetcode.com/problems/number-of-islands-ii/

function numIslands2(m, n, positions) {
  let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let numIslands = [];
  let count = 0;
  let ref = Array(m * n).fill(-1);
  for (let pos of positions) {
    let point = n * pos[0] + pos[1];
    ref[point] = point;
    count++;

    for (let dir of directions) {
      let row = pos[0] + dir[0];
      let col = pos[1] + dir[1];
      let neighbor = n * row + col;

      if (row < 0 || row >= m || col < 0 || col >= n || ref[neighbor] === -1) {
        continue;
      }
      let rootNeighbor = neighbor;
      while (ref[rootNeighbor] !== rootNeighbor) {
        rootNeighbor = ref[rootNeighbor];
      }
      if (point !== rootNeighbor) {
        ref[point] = rootNeighbor;
        point = rootNeighbor;
        count--;
      }
    }
    numIslands.push(count);
  }

  return numIslands;
}

module.exports = numIslands2;
