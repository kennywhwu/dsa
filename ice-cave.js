// Given maze, determine minimum number of steps to get to exit if slide into obstacles and bounds

function minSteps(grid) {
  let ref = {};
  let queue = [{ y: 0, x: 0, steps: 0 }];
  let min = Infinity;

  while (queue.length) {
    let current = queue.shift();
    let { y, x, steps } = current;
    if (grid[y][x] === 2) min = Math.min(min, steps);
    let coord = `${y}-${x}`;
    if (ref[coord] > steps || ref[coord] === undefined) {
      ref[coord] = steps;
      _appendValidCoord(y, x, grid, steps, queue);
    }
  }
  return min;
}

function _appendValidCoord(y, x, grid, steps, queue) {
  let tempY = y,
    tempX = x;
  while (tempY + 1 < grid.length && grid[tempY + 1][x] !== 1) {
    tempY++;
    if (grid[tempY][x] === 2) break;
  }
  if (!(y === tempY && x === tempX))
    queue.push({ y: tempY, x: tempX, steps: steps + 1 });
  tempY = y;
  while (tempX + 1 < grid[0].length && grid[y][tempX + 1] !== 1) {
    tempX++;
    if (grid[y][tempX] === 2) break;
  }
  if (!(y === tempY && x === tempX))
    queue.push({ y: tempY, x: tempX, steps: steps + 1 });
  tempX = x;
  while (tempY - 1 >= 0 && grid[tempY - 1][x] !== 1) {
    tempY--;
    if (grid[tempY][x] === 2) break;
  }
  if (!(y === tempY && x === tempX))
    queue.push({ y: tempY, x: tempX, steps: steps + 1 });
  tempY = y;
  while (tempX - 1 >= 0 && grid[y][tempX - 1] !== 1) {
    tempX--;
    if (grid[y][tempX] === 2) break;
  }
  if (!(y === tempY && x === tempX))
    queue.push({ y: tempY, x: tempX, steps: steps + 1 });
  return queue;
}

module.exports = { minSteps };
