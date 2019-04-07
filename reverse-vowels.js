// Given string, reverse vowels

// https://leetcode.com/problems/reverse-vowels-of-a-string

function reverseVowels(s) {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  let vowelRef = [];
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) vowelRef.push(i);
  }
  let strArr = s.split("");
  for (let i = 0; i < vowelRef.length / 2; i++) {
    [strArr[vowelRef[i]], strArr[vowelRef[vowelRef.length - 1 - i]]] = [
      strArr[vowelRef[vowelRef.length - 1 - i]],
      strArr[vowelRef[i]],
    ];
  }

  return strArr.join("");
}

module.exports = reverseVowels;
