// Given an array of possibly duplicate integers, return array of unique permutations

var permuteUnique = function(nums) {
  nums.sort();
  let output = [];
  let freq = {};
  for (let num of nums) {
    freq[num] = ++freq[num] || 1;
  }

  function _backtrack(tempList) {
    if (tempList.length === nums.length) {
      output.push([...tempList]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (freq[nums[i]] === 0) continue;
      if (i > 0 && nums[i] === nums[i - 1]) continue;
      tempList.push(nums[i]);
      freq[nums[i]]--;
      _backtrack(tempList);
      tempList.pop();
      freq[nums[i]]++;
    }
  }

  _backtrack([]);

  return output;
};

module.exports = permuteUnique;
