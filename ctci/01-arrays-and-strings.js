function allUnique(str) {
  str = str
    .toLowerCase()
    .split('')
    .filter(c => c !== ' ');
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    if (!freq[str[i]]) {
      freq[str[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

function allUniqueSpace(str) {
  str = str
    .toLowerCase()
    .split('')
    .filter(c => c !== ' ')
    .sort();
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) return false;
  }
  return true;
}

function checkPermutation(str1, str2) {
  if (str1.length !== str2.length) return false;
  let freq = {};
  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] = ++freq[str1[i]] || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!freq[str2[i]]) return false;
    freq[str2[i]]--;
  }
  return true;
}

function checkPermutationSpace(str1, str2) {
  if (str1.length !== str2.length) return false;
  str1 = str1.split('').sort();
  str2 = str2.split('').sort();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}

function URLify(str) {
  return str.split(' ').join('%20');
}

function palindromePermutation(str) {
  let freq = {};
  for (let i = 0; i < str.length; i++) {
    freq[str[i]] = ++freq[str[i]] || 1;
  }
  let oddCount = 0;
  for (let key in freq) {
    if (key !== ' ' && freq[key] % 2 !== 0) oddCount++;
    if (oddCount > 1) return false;
  }
  return true;
}

function oneAway(str1, str2) {
  if (str1 === str2) return true;
  if (Math.abs(str1.length - str2.length) > 1) return false;
  let freq = {};
  let maxString = str1.length >= str2.length ? str1 : str2;
  let minString = str1.length < str2.length ? str1 : str2;
  let offCount = 0;
  for (let i = 0; i < minString.length; i++) {
    freq[minString[i]] = ++freq[minString[i]] || 1;
  }
  for (let i = 0; i < maxString.length; i++) {
    if (freq[maxString[i]] === undefined || --freq[maxString[i]] < 0)
      offCount++;
    if (offCount > 1) return false;
  }
  return true;
}

// push to array then join at end, faster than continuous string concatenation?
function stringCompression(str) {
  let output = '';
  let currentCount = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      output += `${str[i]}${currentCount}`;
      currentCount = 1;
      if (i + 1 === str.length - 1) output += `${str[i]}${currentCount}`;
    } else {
      currentCount++;
      if (i + 1 === str.length - 1) output += `${str[i]}${currentCount}`;
    }
  }
  if (str.length <= output.length) {
    return str;
  } else {
    return output;
  }
}
function stringCompression2(str) {
  let output = [];
  let currentCount = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] !== str[i + 1]) {
      output.push(`${str[i]}${currentCount}`);
      currentCount = 1;
      if (i + 1 === str.length - 1) output.push(`${str[i]}${currentCount}`);
    } else {
      currentCount++;
      if (i + 1 === str.length - 1) output.push(`${str[i]}${currentCount}`);
    }
  }
  output = output.join('');
  if (str.length <= output.length) {
    return str;
  } else {
    return output;
  }
}

function rotateMatrix(arr) {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[0].length; j++) {
      row.push(arr[arr.length - 1 - j][i]);
    }
    output.push(row);
  }
  return output;
}

// rotate matrix in place
function rotateMatrix2(arr) {
  function swap(arr, idx1, idx2) {
    let temp = arr[idx2][idx1];
    arr[idx2][idx1] = arr[arr.length - idx1 - 1][idx2];
    arr[arr.length - idx1 - 1][idx2] =
      arr[arr.length - idx2 - 1][arr.length - idx1 - 1];
    arr[arr.length - idx2 - 1][arr.length - idx1 - 1] =
      arr[idx1][arr.length - idx2 - 1];
    arr[idx1][arr.length - idx2 - 1] = temp;
  }
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    for (let j = i; j < arr[i].length - 1 - i; j++) {
      swap(arr, i, j);
    }
  }
  return arr;
}

// Time: O(n x m) n/m are length and width of matrix
// Space: O(n + m)
function zeroMatrix(arr) {
  let xCoord = new Set();
  let yCoord = new Set();
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) {
        xCoord.add(j);
        yCoord.add(i);
      }
    }
  }
  for (let x of xCoord) {
    for (let i = 0; i < arr.length; i++) {
      arr[i][x] = 0;
    }
  }
  for (let y of yCoord) {
    for (let j = 0; j < arr[0].length; j++) {
      arr[y][j] = 0;
    }
  }
  return arr;
}

// Time: O(n + m) n/m are lengths of strings
// Space: O(m) m is the length of the second string
function stringRotation(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;
  str2 = str2 + str2;
  let pointer1 = 0;
  let pointer2 = 0;
  while (pointer1 < str1.length && pointer2 < str2.length) {
    if (str1[pointer1] === str2[pointer2]) pointer1++;
    pointer2++;
  }
  if (pointer1 === str1.length) return true;
  return false;
}

// Time: O(n + m) n/m is length of strings
// Space: O(1)
function stringRotationSpace(str1, str2) {
  if (str1 === str2) return true;
  if (str1.length !== str2.length) return false;
  let pointer1 = 0;
  let pointer2 = 0;
  let rotatePoint;
  while (pointer2 < str2.length) {
    if (str1[0] !== str2[pointer2]) {
      pointer2++;
    } else {
      rotatePointer = pointer2;
      break;
    }
  }
  while (pointer1 < str1.length && pointer2 - rotatePointer < str2.length) {
    if (str1[pointer1] === str2[pointer2 % str2.length]) pointer1++;
    pointer2++;
  }
  if (pointer1 === str1.length) return true;
  return false;
}

module.exports = {
  allUnique,
  allUniqueSpace,
  checkPermutation,
  checkPermutationSpace,
  URLify,
  palindromePermutation,
  oneAway,
  stringCompression,
  stringCompression2,
  rotateMatrix,
  rotateMatrix2,
  zeroMatrix,
  stringRotation,
  stringRotationSpace,
};
