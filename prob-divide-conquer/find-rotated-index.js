function findRotatedIndex(arr, num) {
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor((start + end) / 2);
  while (start < end && start >= 0 && end < arr.length) {
    if (arr[start] === num) return start;
    if (arr[end] === num) return end;
    if (arr[mid] === num) return mid;
    if (num < arr[mid]) {
      if (num > arr[start]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
      mid = Math.floor((start + end) / 2);
    } else if (num > arr[mid]) {
      if (num < arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
      mid = Math.floor((start + end) / 2);
    }
  }
  if (start >= arr.length || end < 0 || arr[mid] !== num) return -1;
  return mid;
}

module.exports = findRotatedIndex;
