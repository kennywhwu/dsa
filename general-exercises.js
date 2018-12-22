// Returns string printed from left to right in zigzag form depending on passed-in num number of rows (from LeetCode)
function convertZigzag(str, num) {
  let output = '';
  // initialize arrays
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr[i] = [];
  }
  // set reverse condition
  let reverse = false;
  // loop through each letter; if not reverse, push linearly into corresponding array; otherwise push into reverse order
  for (let i = 0; i < str.length; i++) {
    if (!reverse) {
      arr[i % ((num - 1) * 2)].push(str[i]);
      if ((i + 1) % (num - 1) === 0) reverse = true;
    } else {
      arr[num - 1 - (i % (num - 1))].push(str[i]);
      if ((i + 1) % (num - 1) === 0) reverse = false;
    }
  }

  // concatenate string with characters in arrays in order
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      output += arr[i][j];
    }
  }
  return output;
}

module.exports = { convertZigzag };
