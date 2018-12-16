// Compare element with previous one
// If smaller than previous, then swap
// Once stop swapping, move to the next element
// Current element is inserted into correct relative order
// Time complexity: O(n^2)
// Space complexity: O(1)

function insertionSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
  }

  for (let i = 1; i < arr.length; i++) {
    console.log(arr);
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
      }
    }
  }
  return arr;
}

function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr);
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}

insertionSort2([3, 4, 1, 2, 7, 5]);
