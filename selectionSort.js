// Compare current element with next
// If current is larger than next, set next as running minimum
// Continue until reach end of list, then swap minimum with current element
// Runs through entire list to find minimum, then sets it in the order
// Time complexity: O(n^2)
// Space complexity: O(1)

function selectionSort(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx2];
    arr[idx2] = arr[idx1];
    arr[idx1] = temp;
  }

  for (let i = 0; i < arr.length; i++) {
    console.log(arr);
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, minIndex, i);
    }
  }
  return arr;
}

selectionSort([4, 5, 3, 2, 7, 1]);
