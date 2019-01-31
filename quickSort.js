// Compare element to next element
// If current is larger, then swap with the next element in front of current
// Continue swapping for elements lower than current
// Once hit the end of list, swap current element with the last swapped element
// Current element will always be swapped into its correct position
// Time complexity: O(n log n)
// Space complexity: O(log n)

function swap(arr, idx1, idx2) {
  let temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let pivotIndex = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < arr[start]) {
      pivotIndex++;
      swap(arr, pivotIndex, i);
    }
  }
  swap(arr, pivotIndex, start);
  return pivotIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);

    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

quickSort([6, 3, 4, 1, 7, 8, 5]);
