function findRotationCount(arr) {
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor((start + end) / 2);

  while (start < end && start < arr.length && end >= 0) {
    if (arr[mid] < arr[mid - 1]) return mid;
    if (arr[end] < arr[end - 1]) return end;
    if (arr[mid] > arr[start]) start = mid + 1;
    if (arr[mid] < arr[start]) end = mid - 1;
    mid = Math.floor((start + end) / 2);
  }

  if (arr[mid] >= arr[0]) return 0;
  return mid;
}

module.exports = findRotationCount;
