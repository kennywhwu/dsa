// Given n and k, return string of the kth permutation in the order of n digits 1-n

// https://leetcode.com/problems/permutation-sequence/

function getPermutation(n, k) {
  let found = false;
  function _backtrack(tempList) {
    if (!found) {
      if (tempList.length === n) {
        counter++;
        if (counter === k) {
          output = tempList.join("");
          found = true;
        }
      } else if (tempList.length > n) {
        return;
      } else {
        for (let i = 1; i <= n; i++) {
          if (tempList.includes(i)) continue;
          tempList.push(i);
          _backtrack(tempList);
          tempList.pop();
        }
      }
    }
  }
  let output;
  let counter = 0;
  _backtrack([]);
  return output;
}

module.exports = getPermutation;
