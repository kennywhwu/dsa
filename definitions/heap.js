// Max Heap

function insert(arr, num) {
  arr.push(num);
  return bubbleUp(arr);
}

// recursive bubbleUp
// function bubbleUp(arr, idx) {
//   let targetIdx = Math.floor((idx - 1) / 2);
//   if (arr[targetIdx] < arr[idx]) {
//     [arr[idx], arr[targetIdx]] = [arr[targetIdx], arr[idx]];
//     return bubbleUp(arr, targetIdx);
//   } else {
//     return arr;
//   }
// }

// iterative bubbleUp

function bubbleUp(arr) {
  let idx = arr.length - 1;

  while (idx > 0) {
    let parentIdx = Math.floor((idx - 1) / 2);
    if (arr[idx] > arr[parentIdx]) {
      [arr[idx], arr[parentIdx]] = [arr[parentIdx], arr[idx]];
    } else {
      break;
    }
    idx = parentIdx;
  }
  return arr;
}

function extractMax(arr) {
  let max = arr[0];
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
  arr.pop();
  sinkDown(arr);
  return max;
}

function sinkDown(arr) {
  let idx = 0;
  let leftIdx = 1;
  let rightIdx = 2;
  while (idx < arr.length && leftIdx < arr.length && rightIdx < arr.length) {
    let largest = idx;
    leftIdx = idx * 2 + 1;
    rightIdx = idx * 2 + 2;
    if (arr[largest] < arr[leftIdx]) {
      largest = leftIdx;
    }
    if (arr[largest] < arr[rightIdx]) {
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

module.exports = { insert, extractMax };
