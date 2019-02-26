function minSwaps(arr) {
  let i = 0;
  let counter = 0;
  while (i < arr.length) {
    if (arr[i] !== i + 1) {
      let temp = arr[i];
      arr[i] = arr[arr[i] - 1];
      arr[temp - 1] = temp;
      counter++;
    }
    if (arr[i] === i + 1) i++;
  }
  return counter;
}

module.exports = minSwaps;
