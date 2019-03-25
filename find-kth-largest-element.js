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

  function _bubbleUp(arr) {
    let idx = 0;
    let leftIdx = 1;
    let rightIdx = 2;
    while (
      idx < arr.length &&
      (leftIdx < arr.length || rightIdx < arr.length)
    ) {
      let largest = idx;
      leftIdx = idx * 2 + 1;
      rightIdx = idx * 2 + 2;
      if (arr[largest] > arr[leftIdx]) {
        largest = leftIdx;
      }
      if (arr[largest] > arr[rightIdx]) {
        largest = rightIdx;
      }
      if (idx !== largest) {
        [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
        idx = largest;
      } else {
        break;
      }
    }
  }

  for (let num of nums) {
    if (minHeap.length >= k) {
      if (num <= minHeap[0]) {
        continue;
      } else {
        minHeap.push(num);
        _sinkDown(minHeap);
        minHeap[0] = minHeap[minHeap.length - 1];
        minHeap.pop();
        _bubbleUp(minHeap);
      }
    } else {
      minHeap.push(num);
      _sinkDown(minHeap);
    }
  }

  return minHeap[0];
}

module.exports = findKthLargest;
