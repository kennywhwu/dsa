function countZeroes(arr) {
  if (arr[0] === 0) return arr.length;
  if (arr[arr.length - 1] === 1) return 0;
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);

  while (start < end && start >= 0 && end < arr.length) {
    if (arr[mid] === 0) end = mid - 1;
    if (arr[mid] === 1) start = mid + 1;
    mid = Math.floor((start + end) / 2);
  }
  if (arr[mid] === 1) return arr.length - mid - 1;
  if (arr[mid] === 0) return arr.length - mid;
}

module.exports = countZeroes;
