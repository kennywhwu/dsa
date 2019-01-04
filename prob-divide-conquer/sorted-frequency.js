function sortedFrequency(arr, num) {
  function _findStartIndex(arr, num) {
    let first = 0;
    let last = arr.length - 1;
    let mid = Math.floor((first + last) / 2);
    while (first < last && first < arr.length && last >= 0) {
      if (arr[mid] < num) first = mid + 1;
      if (arr[mid] >= num) last = mid - 1;
      mid = Math.floor((first + last) / 2);
    }
    if (first >= arr.length || last < 0) return -1;
    return arr[mid] === num ? mid : mid + 1;
  }

  function _findEndIndex(arr, num) {
    let first = 0;
    let last = arr.length - 1;
    let mid = Math.floor((first + last) / 2);
    while (first < last && first < arr.length && last >= 0) {
      if (arr[mid] <= num) first = mid + 1;
      if (arr[mid] > num) last = mid - 1;
      mid = Math.floor((first + last) / 2);
    }
    if (first >= arr.length || last < 0) return -1;
    return arr[mid] === num ? mid : mid - 1;
  }

  return _findEndIndex(arr, num) - _findStartIndex(arr, num) + 1;
}

module.exports = sortedFrequency;
