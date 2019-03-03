// Given roman numeral, return integer value

// https://leetcode.com/problems/roman-to-integer/

function romanToInt(s) {
  let romanKey = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let intArray = s.split("").map(char => romanKey[char]);
  let sum = 0;
  for (let i = 0; i < intArray.length - 1; i++) {
    if (intArray[i] < intArray[i + 1]) {
      sum -= intArray[i];
    } else {
      sum += intArray[i];
    }
  }
  sum += intArray[intArray.length - 1];
  return sum;
}

module.exports = romanToInt;
