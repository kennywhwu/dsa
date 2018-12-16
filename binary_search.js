// For a sorted list, look at left or right side of midpoint depending on how target compares
// Repeat for target side until reach intended target or not found
// Time complexity: O(log n)
// Space complexity: O(1)

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (start <= end) {
    if (arr[middle] === val) {
      return middle;
    } else if (arr[middle] < val) {
      start = middle + 1;
    } else if (arr[middle] > val) {
      end = middle - 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  return -1;
}
