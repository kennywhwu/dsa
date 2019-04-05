// Given k digits and n target, return array of permutations of 1-9 made up of k digits that sum up to n

var combinationSum3 = function(k, n) {
  // initialize output
  let output = [];
  // helper function passing in tempList, sum, and start
  function _backtrack(tempList, sum, start) {
    // base case: if sum === target push tempList to output
    if (sum === n && tempList.length === k) {
      output.push([...tempList]);
      // else if sum > target, return
    } else if (sum > n || tempList.length >= k) {
      return;
      // else loop through start to n
    } else {
      for (let i = start; i <= 9; i++) {
        // push number to tempList and add to sum
        tempList.push(i);
        // call helper with tempList, sum, and i+1
        _backtrack(tempList, sum + i, i + 1);
        // pop number from tempList and subtract from sum
        tempList.pop();
      }
    }
  }
  // call helper function with empty tempList, 0 sum and 1 start
  _backtrack([], 0, 1);

  // return output
  return output;
};

module.exports = combinationSum3;
