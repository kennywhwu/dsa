//Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent (https://leetcode.com/problems/letter-combinations-of-a-phone-number/).

function letterCombinations(digits) {
  if (digits.length === 0) return [];
  let dict = {
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"],
  };
  let output = [];

  function _DFS(i = 0, current = []) {
    if (i === digits.length) {
      output.push([...current].join(""));
    }
    if (i < digits.length) {
      dict[digits[i]].forEach(c => {
        current.push(c);
        _DFS(i + 1, current);
        current.pop();
      });
    }
  }
  _DFS();
  return output;
}

module.exports = letterCombinations;
