// Given integer, return roman numeral string

// https://leetcode.com/problems/integer-to-roman/

function intToRoman(num) {
  let romanRef = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let sum = num;
  let roman = "";
  while (sum > 0) {
    let i = 0;
    while (i < romanRef.length) {
      if (sum - romanRef[i][0] >= 0) {
        sum -= romanRef[i][0];
        roman += romanRef[i][1];
      } else {
        i++;
      }
    }
  }
  return roman;
}

module.exports = intToRoman;
