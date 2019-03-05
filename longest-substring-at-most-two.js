// Given a string s , find the length of the longest substring t  that contains at most 2 distinct characters.

// https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/

function longestSubstring(s) {
  let charSet = new Set(),
    freq = {},
    start = 0,
    end = 0,
    max = 0;

  while (end < s.length) {
    charSet.add(s[end]);
    freq[s[end]] = ++freq[s[end]] || 1;
    end++;

    while (charSet.size > 2) {
      freq[s[start]]--;
      if (freq[s[start]] === 0) charSet.delete(s[start]);
      start++;
    }

    if (charSet.size <= 2 && max < end - start) {
      max = end - start;
    }
  }

  return max;
}

module.exports = longestSubstring;
