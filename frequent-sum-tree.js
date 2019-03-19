// Given binary tree, return array of most frequent sum of subtress

var findFrequentTreeSum = function(root) {
  let freq = {};

  function _DFS(node) {
    if (node === null) return 0;
    let sum = node.val + _DFS(node.left) + _DFS(node.right);
    freq[sum] = ++freq[sum] || 1;
    return sum;
  }

  _DFS(root);

  let values = Object.values(freq);
  let max = 0;
  let maxSumArr = [];
  for (value of values) {
    max = Math.max(max, value);
  }
  for (let key in freq) {
    if (freq[key] === max) maxSumArr.push(+key);
  }

  return maxSumArr;
};

module.exports = findFrequentTreeSum;
