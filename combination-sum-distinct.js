// Given array of distinct integers, return array of all unique combinatons that sum to target

var combinationSum = function(candidates, target) {
  // initialize output
  let output = [];
  candidates.sort();
  // helper function
  function _backtrack(tempList, sum, start) {
    // if sum === target, push tempList to output
    if (sum === target) {
      output.push([...tempList]);
    } else if (sum > target) {
      return;
    } else {
      // loop through numbers
      for (let i = start; i < candidates.length; i++) {
        if (i > 0 && candidates[i] === candidates[i - 1]) continue;
        // push number to tempList and add to sum
        tempList.push(candidates[i]);
        // call helper on tempList and sum
        _backtrack(tempList, sum + candidates[i], i);
        // pop number from tempList and subtract from sum
        tempList.pop();
      }
    }
  }
  // call helper function with empty tempList and 0 sum
  _backtrack([], 0, 0);
  // return output
  return output;
};

module.exports = combinationSum;
