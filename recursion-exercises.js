// List of exercises to be solved with recursion

// Return reverse of string
function revString(str) {
  if (str.length === 0) return '';
  return str[str.length - 1] + revString(str.substring(0, str.length - 1));
}

// Return product of list of numbers
function product(nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 0) return 0;
  return nums[0] * product(nums.slice(1));
}

// Print every other character in string
function everyOther(str) {
  let index = 0;
  function _everyOther(str) {
    if (index === str.length) return;
    if (index % 2 === 0) {
      console.log(str[index]);
    }
    index++;
    _everyOther(str);
  }
  _everyOther(str);
}

// Return array of every other character in string
function everyOther2(str) {
  let index = 0;
  let outputStr = '';
  function _everyOther2(str) {
    if (index === str.length) return;
    if (index % 2 === 0) {
      outputStr += str[index];
    }
    index++;
    _everyOther2(str);
  }
  _everyOther2(str);
  return outputStr;
}

// Return length of longest string in list of strings
function longest(words) {
  let maxLength = 0;

  function _longest(words) {
    if (words.length === 0) return;
    if (words[0].length > maxLength) {
      maxLength = words[0].length;
    }
    _longest(words.slice(1));
  }

  _longest(words);
  return maxLength;
}

// Return true if string is palindrome, otherwise false
function isPalindrome(str) {
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(str.slice(1, str.length - 1));
}

// Return index of passed-in word within passed-in array of words, or -1 if not found
function findIndex(words, word) {
  if (words.length === 0) return false;
  if (words[0] === word) return true;
  return findIndex(words.slice(1), word);
}

// Return array of all values that are strings within nested object
function gatherStrings(obj) {
  let strArray = [];

  function _gatherStrings(obj) {
    for (key in obj) {
      if (typeof obj[key] === 'string') {
        strArray.push(obj[key]);
      } else if (!!obj[key] && obj[key].constructor === Object) {
        // determine if value is object (not null and has constructor is Object)
        _gatherStrings(obj[key]);
      }
    }
  }

  _gatherStrings(obj);
  return strArray;
}

// Return index of target number in array of numbers based on binary search algorithm, or -1 if not found
function binarySearch(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  function _binarySearch(nums, target) {
    if (nums.length === 0 || end < start) return -1;
    let mid = Math.floor((start + end) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      end = mid - 1;
      return _binarySearch(nums, target);
    }
    start = mid + 1;
    return _binarySearch(nums, target);
  }

  return _binarySearch(nums, target);
}

// Return count of numbers in nested arrays (from Codewars)
function realSize(arrays) {
  let numCount = 0;
  function _realSize(arrays) {
    for (let i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i])) {
        _realSize(arrays[i]);
      } else {
        numCount++;
      }
    }
  }
  _realSize(arrays);
  return numCount;
}

// Return sum of squares for all numbers in nested arrays (from Codewars)
function sumSquares(l) {
  let sum = 0;
  function _sumSquares(l) {
    for (let i = 0; i < l.length; i++) {
      if (Array.isArray(l[i])) {
        _sumSquares(l[i]);
      } else {
        sum += l[i] * l[i];
      }
    }
  }
  _sumSquares(l);
  return sum;
}

// Return array with number listed out passed-in times (from Codewars)
function replicate(times, number) {
  function _replicate(times, number, output = []) {
    if (times <= 0) {
      return output;
    }
    output.push(number);
    return _replicate(--times, number, output);
  }
  return _replicate(times, number);
}

// Return true if string contains balances brackets, false if not
function balancedBrackets(str) {
  let i = 0;
  let count = 0;
  let closed = [];
  function _balancedBrackets(str) {
    if (i === str.length) {
      if (count === 0) {
        return true;
      }
      return false;
    }
    switch (str[i]) {
      case '{':
        count++;
        closed.push('}');
        break;
      case '[':
        count++;
        closed.push(']');
        break;
      case '(':
        count++;
        closed.push(')');
        break;
      case ')':
      case ']':
      case '}':
        if (str[i] !== closed[closed.length - 1]) return false;
        count--;
        closed.pop();
        break;
      default:
        break;
    }
    i++;
    return _balancedBrackets(str);
  }
  return _balancedBrackets(str);
}

// return space-separated flattened string based on array of arrays
function dump(square) {
  if (square === 0 || square === 1) {
    return square.toString();
  }
  return square.map(s => dump(s)).join(' ');
}

function validate(square) {
  if (square === 0 || square === 1) {
    return true;
  }
  if (Array.isArray(square) && square.length === 4) {
    return square.every(s => validate(s));
  }
  return false;
}

function simplify(square) {
  if (square === 0 || square === 1) {
    return square;
  }
  if (
    square.every(
      (s, i, arr) =>
        !Array.isArray(simplify(square[i])) &&
        simplify(square[i]) === simplify(square[0])
    )
  ) {
    return simplify(square[0]);
  } else {
    return square.map(s => simplify(s));
  }
}

function add(square1, square2) {
  if (typeof square1 === 'number' && typeof square2 === 'number') {
    if (square1 !== square2) return 1;
    if (square1 === square2) return square1;
  }
  if (Array.isArray(square1) && !Array.isArray(square2)) {
    square2 = [square2, square2, square2, square2];
  }
  if (Array.isArray(square2) && !Array.isArray(square1)) {
    square1 = [square1, square1, square1, square1];
  }
  return [
    add(square1[0], square2[0]),
    add(square1[1], square2[1]),
    add(square1[2], square2[2]),
    add(square1[3], square2[3]),
  ];
}

module.exports = {
  revString,
  product,
  everyOther2,
  longest,
  isPalindrome,
  findIndex,
  gatherStrings,
  binarySearch,
  realSize,
  sumSquares,
  replicate,
  balancedBrackets,
  dump,
  validate,
  simplify,
  add,
};
