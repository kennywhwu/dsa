// Given a string, return array of all palindromic partitions of the string

// https://leetcode.com/problems/palindrome-partitioning/

var partition = function(s) {
  // helper function to validate palindrome
  function _isPalindrome(s) {
    for (let i = 0; i < s.length / 2; i++) {
      if (s[i] !== s[s.length - i - 1]) return false;
    }
    return true;
  }

  // initialize output
  let output = [];
  // helper function passing in tempList, start
  function _backtrack(tempList, idx) {
    // base case: if reach end of string, push tempList into output
    if (idx === s.length) {
      output.push([...tempList]);
      // else loop through i = start to string length
    } else {
      for (let size = 1; size < s.length - idx + 1; size++) {
        // create substring from start to end
        let str = s.substring(idx, idx + size);
        // if substring is palindrome, push to tempList and move index
        if (_isPalindrome(str)) {
          tempList.push(str);
          idx += size;
          // else break
        } else {
          continue;
        }
        // call helper function with tempList,
        _backtrack(tempList, idx);
        // pop from tempList and bring index back
        tempList.pop();
        idx -= size;
      }
    }
  }

  // call helper function with empty tempList, 0 start
  _backtrack([], 0);
  // return output

  return output;
};

module.exports = partition;
