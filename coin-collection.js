// Given map of coins, return only right and down directions to go from top left to bottom right with maximum number of coins

function coinCollectionDirection(grid) {
  function _traverse(map, grid, y, x, directions) {
    let coord = `${y}-${x}`;
    let value = grid[y][x];
    console.log("coord", coord, "value", value, "map", map, 'directions',directions);
    if (map[coord]) {
      directions.push(map[coord].step);
      return map[coord].value;
    }

    let right = 0,
      down = 0;
    if (y + 1 < grid.length) {
      directions.push("d");
      down = _traverse(map, grid, y + 1, x, directions);
      directions.pop();
    }
    if (x + 1 < grid[0].length) {
      directions.push("r");
      right = _traverse(map, grid, y, x + 1, directions);
      directions.pop();
    }

    if (right > down) {
      value += right;
      map[coord] = { value, step: "r" };
    } else {
      value += down;
      map[coord] = { value, step: "d" };
    }
    return map[coord].value;
  }

  let directions = [];
  _traverse({}, grid, 0, 0, directions);
  return directions;
}
function coinCollection(grid) {
  function _traverse(map, grid, y, x) {
    let coord = `${y}-${x}`;
    let value = grid[y][x];
    if (map[coord]) {
      return map[coord];
    }

    let right = 0,
      down = 0;
    if (y + 1 < grid.length) {
      down = _traverse(map, grid, y + 1, x);
    }
    if (x + 1 < grid[0].length) {
      right = _traverse(map, grid, y, x + 1);
    }

    value += Math.max(right, down);
    map[coord] = value;
    return value;
  }

  return _traverse({}, grid, 0, 0);
}

module.exports = { coinCollection, coinCollectionDirection };
