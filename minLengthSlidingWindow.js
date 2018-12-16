// Return minimum length of continuous subarray with sum greater than equal to target num
// Run sliding window (remove head, compare, then add tail if necessary) on list to see if current subarray is >= target sum
// Time complexity: O(n)
// Space complexity: O(1)

function minSubArrayLen(arr, num) {
  let counter = 0;
  let currentSum = arr[counter];
  let currentLength = 1;

  while (currentSum < num) {
    counter++;
    currentSum += arr[counter];
    currentLength++;
  }
  let minLength = currentLength;

  counter = 0;
  while (counter < arr.length) {
    if (currentSum >= num) {
      console.log('greater', counter, currentSum, currentLength, minLength);
      if (currentLength < minLength) {
        minLength = currentLength;
      }
      currentSum -= arr[counter];
      currentLength--;
      counter++;
    } else if (currentSum < num) {
      console.log('lower', counter, currentSum, currentLength, minLength);
      currentSum += arr[counter + currentLength];
      currentLength++;
      counter++;
    }
  }
  return minLength;
}

// (minSubArrayLen([2,1,6,5,4],9))
minSubArrayLen([2, 1, 6, 5, 4], 9);
