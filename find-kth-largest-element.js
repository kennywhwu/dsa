// Given an unsorted array, return the kth largest element (including duplicates)

// https://leetcode.com/problems/kth-largest-element-in-an-array/

function findKthLargest(nums, k) {
  let minHeap = [];

  function _sinkDown(arr) {
    let idx = arr.length - 1;

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      if (arr[idx] < arr[parentIdx]) {
        [arr[idx], arr[parentIdx]] = [arr[parentIdx], arr[idx]];
      } else {
        break;
      }
      idx = parentIdx;
    }
    return arr;
  }

  for (let num of nums) {
    if (minHeap.length >= k) {
      if (num <= minHeap[0]) {
        continue;
      } else {
        minHeap.push(num);
        _sinkDown(minHeap);
        minHeap.shift();
      }
    } else {
      minHeap.push(num);
      _sinkDown(minHeap);
    }
  }

  return minHeap[0];
}

module.exports = findKthLargest;
