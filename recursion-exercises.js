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

module.exports = {
  revString,
  product,
  everyOther2,
  longest,
  isPalindrome,
  findIndex,
  gatherStrings,
  binarySearch,
};
