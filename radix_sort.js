// Place all numerical elements in respective bucket based on ones digit, then merge back into single array
// Repeat with tens digit, then continue for the largest number of digits in list
// Time complexity: O(nk)
// Space complexity: O(n+k)

function getDigit(num, digit) {
  return Math.floor(Math.abs(num) / Math.pow(10, digit)) % 10;
}

// getDigit(54321,2)

function countDigits(num) {
  if (num === 0) {
    return 1;
  }
  return Math.ceil(Math.log10(Math.abs(num)));
}

// countDigits(54321)

function mostDigits(arr) {
  let maxDigits = 0;
  for (let i = 0; i < arr.length; i++) {
    maxDigits = Math.max(maxDigits, countDigits(arr[i]));
  }
  return maxDigits;
}

// mostDigits([123,1,2356,23])

function radixSort(arr) {
  let runs = mostDigits(arr);
  for (let i = 0; i < runs; i++) {
    let buckets = Array.from({ length: 10 }, () => []);

    for (let j = 0; j < arr.length; j++) {
      buckets[getDigit(arr[j], i)].push(arr[j]);
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

radixSort([234, 95, 3847, 2, 32, 118374]);
