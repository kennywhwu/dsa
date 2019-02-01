function firstMissingPositive(nums) {
  nums.push(0);
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    if (nums[i] < 0 || nums[i] >= n) nums[i] = 0;
  }
  for (let i = 0; i < n; i++) {
    nums[nums[i] % n] += n;
  }
  for (let i = 1; i < n; i++) {
    if (Math.floor(nums[i] / n) === 0) return i;
  }
  return n;
}

module.exports = firstMissingPositive;
