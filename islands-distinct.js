// Given 2D array of islands, return number of distinct shaped islands

// https://leetcode.com/problems/number-of-distinct-islands

function numDistinctIslands(grid) {
  let distinct = new Set()
  let path

  
  
  function _DFS(y,x,change, grid){
    if(y < 0 || y >= grid.length || x < 0 || x >= grid[0].length || grid[y][x] !== 1) return
    grid[y][x] = 0
    path += change
    _DFS(y+1,x,'d',grid)
    _DFS(y-1,x,'u',grid)
    _DFS(y,x+1,'r',grid)
    _DFS(y,x-1,'l',grid)
    path+='b'
}

for(let row = 0; row < grid.length; row++){
    for(let col = 0; col < grid[0].length; col++){
        if(grid[row][col] === 1){
            path = ''
            _DFS(row,col,'s',grid)
            distinct.add(path)
        }
    }
}
  
  
  return distinct.size
};

module.exports = numDistinctIslands