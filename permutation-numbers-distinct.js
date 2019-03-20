// Given array of distinct integers, return list of all unique permutations

var permute = function(nums) {
  let output = [];

  function _backtrack(tempList) {
    if (tempList.length === nums.length) output.push([...tempList]);
    for (let i = 0; i < nums.length; i++) {
      if (!tempList.includes(nums[i])) {
        tempList.push(nums[i]);
        _backtrack(tempList);
        tempList.pop();
      }
    }
  }

  _backtrack([]);
  return output;
};

module.exports = permute;
