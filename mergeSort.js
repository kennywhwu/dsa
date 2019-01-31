// Split list in half continuously until each element is its own list
// For each subgroup of lists, sort smaller list, then merge with another smaller sorted list into new list
// Repeat merge and sort until original list is sorted
// Time complexity: O(n log n)
// Space complexity: O(n)

function mergeArr(arr1, arr2) {
  let pointer1 = 0,
    pointer2 = 0;
  let result = [];
  while (pointer1 < arr1.length && pointer2 < arr2.length) {
    if (arr1[pointer1] < arr2[pointer2]) {
      result.push(arr1[pointer1]);
      pointer1++;
    } else {
      result.push(arr2[pointer2]);
      pointer2++;
    }
  }
  if (pointer1 < arr1.length) {
    result = result.concat(arr1.slice(pointer1));
  } else {
    result = result.concat(arr2.slice(pointer2));
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  return mergeArr(
    mergeSort(arr.slice(0, middle)),
    mergeSort(arr.slice(middle))
  );
}

mergeSort([10, 9, 2, 5, 1, 7, 3, 4, 5, 2, 8, 12, 149, 34, 74]);
