// Given 2D array of one contiguous island, return perimeter of the island

// https://leetcode.com/problems/island-perimeter


function islandPerimeter(grid) {
  let count = 0
  
  function _DFS(y,x,grid){
      if(y < 0 || y >= grid.length || x < 0 || x >= grid[0].length || grid[y][x] === 0){
          count++
          return
      }
      if(grid[y][x] === 2) return
      grid[y][x] = 2
      _DFS(y+1,x,grid)
      _DFS(y-1,x,grid)
      _DFS(y,x+1,grid)
      _DFS(y,x-1,grid)
  }
  
  for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[0].length; col++){
          if(grid[row][col] === 1){
              _DFS(row,col, grid)
          }
      }
  }
  
  return count
};

module.exports = islandPerimeter