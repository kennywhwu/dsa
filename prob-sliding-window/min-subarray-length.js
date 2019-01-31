// add whatever parameters you deem necessary
function minSubarrayLength(arr, num) {
  let start = 0,
    end = 0,
    sum = 0,
    minLength;
  let counter = 0;
  while (start < arr.length && end <= arr.length) {
    counter++;
    if (sum >= num) {
      if (minLength === undefined) minLength = end - start;
      minLength = Math.min(minLength, end - start);
      sum -= arr[start];
      start++;
    } else if (sum < num) {
      sum += arr[end];
      end++;
    }
  }
  return minLength ? minLength : 0;
}
// function minSubarrayLength1(arr, num) {
//   let start = 0,
//     end = 0,
//     sum = 0,
//     length = 0,
//     minLength;
//   while (start <= end && start < arr.length && end < arr.length) {
//     sum += arr[end];
//     length++;
//     while (sum >= num) {
//       if (minLength === undefined) minLength = length;
//       minLength = Math.min(length, minLength);
//       sum -= arr[start];
//       length--;
//       start++;
//     }
//     end++;
//   }
//   return minLength ? minLength : 0;
// }

module.exports = minSubarrayLength;
