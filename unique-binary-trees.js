// Given a number, return the number of structurally different binary trees made up of the number of nodes

var numTrees = function(n) {
  let treeArr = Array(n + 1).fill(0);
  treeArr[0] = 1;
  treeArr[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      treeArr[i] += treeArr[j - 1] * treeArr[i - j];
    }
  }
  return treeArr[n];
};

module.exports = numTrees;
