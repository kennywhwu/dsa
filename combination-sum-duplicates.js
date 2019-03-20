// Given list of possibly duplicate integers, return list of unique permutations where sum equals target

var combinationSum2 = function(candidates, target) {
  // initialize output
  let output = [];
  // sort candidates
  candidates.sort();
  // helper function passing in tempList, sum, and start
  function _backtrack(tempList, sum, start) {
    // base case: if sum === target, output tempList and return
    if (sum === target) {
      output.push([...tempList]);
    } else if (sum > target) {
      return;
    } else {
      // loop through each candidate
      for (let i = start; i < candidates.length; i++) {
        // if index > start and candidate === prev, continue
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        // push candidate to tempList and add to sum
        tempList.push(candidates[i]);
        sum += candidates[i];
        // call helper function with tempList, sum, and new start
        _backtrack(tempList, sum, i + 1);
        // pop candidate off templist and subtract from sum
        tempList.pop();
        sum -= candidates[i];
      }
    }
  }
  // call helper function with empty tempList, 0 sum, and 0 start
  _backtrack([], 0, 0);
  // return output
  return output;
};

module.exports = combinationSum2;
