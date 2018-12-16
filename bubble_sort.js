// Compare element to next one in list.
// If greater, then swap, otherwise move to next element and compare to one after
// Largest element bubbles up to right side
// Time complexity: O(n^2)
// Space complexity: O(1)

function bubbleSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
  }

  for (let i = arr.length; i > 0; i--) {
    console.log('arr', arr);
    let finished = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        finished = false;
      }
    }
    if (finished) {
      break;
    }
  }
  return arr;
}
