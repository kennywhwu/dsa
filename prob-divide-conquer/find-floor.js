function findFloor(arr, num) {
  let start = 0,
    end = arr.length - 1,
    mid = Math.floor((start + end) / 2);
  if (num < arr[start]) return -1;
  if (num > arr[end]) return arr[end];

  while (start < end && start < arr.length && end >= 0) {
    if (num === arr[mid]) return arr[mid];
    if (num < arr[mid] && num >= arr[mid - 1]) return arr[mid - 1];
    if (num < arr[mid]) end = mid;
    if (num > arr[mid]) start = mid;
    mid = Math.floor((start + end) / 2);
  }

  return arr[mid];
}

module.exports = findFloor;
