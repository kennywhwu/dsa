// Given 2D array of islands (1) and water (0), return the maximum size of islands connected horizontally and vertically

// https://leetcode.com/problems/max-area-of-island

function maxAreaOfIsland(grid) {
  let max = 0
  let count
  
  for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[0].length; col++){
          count = 0
          _traverse(row,col,grid)
          max = Math.max(max,count)
      }
  }
  
  function _traverse(y,x,grid){
      if(y >= grid.length || y < 0 || x >= grid[0].length || x < 0 || grid[y][x] === 0) return
      grid[y][x] = 0
      count++
      _traverse(y+1, x, grid)
      _traverse(y-1, x, grid)
      _traverse(y, x+1, grid)
      _traverse(y, x-1, grid)
  }
  
  
  
  return max
};

module.exports = maxAreaOfIsland