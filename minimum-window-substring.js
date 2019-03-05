// Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

// https://leetcode.com/problems/minimum-window-substring/

function minWindow(s, t) {
  //push index into queue when reach any element in freq, decrease count
  //when freq = 0, count difference btw index of first and last in queue
  //if reach char = to first index in queue, shift it out of queue
  let freq = {};
  for (let char of t) {
    freq[char] = ++freq[char] || 1;
  }
  let total = t.length,
    start = 0,
    end = 0,
    head = 0,
    min = Infinity;
  while (end < s.length) {
    if (freq[s[end]] > 0) {
      total--;
    }
    freq[s[end]]--;
    end++;

    while (total === 0) {
      if (end - start < min) {
        min = end - start;
        head = start;
      }
      if (freq[s[start]] === 0) {
        total++;
      }
      freq[s[start]]++;
      start++;
    }
  }
  return min === Infinity ? "" : s.substring(head, head + min);
}

// function minWindow(s, t) {
//   //push index into queue when reach any element in freq, decrease count
//   //when freq = 0, count difference btw index of first and last in queue
//   //if reach char = to first index in queue, shift it out of queue
//   let freq = {};
//   for (let char of t) {
//     freq[char] = ++freq[char] || 1;
//   }
//   let total = t.length;
//   let queue = [];
//   let minStr = "";
//   let currentLength;
//   for (let i = 0; i < s.length; i++) {
//     if (total === 0) {
//       currentLength = queue[queue.length - 1][1] - queue[0][1] + 1;
//       if (minStr === "" || minStr.length > currentLength) {
//         minStr = s.substring(queue[0][1], queue[queue.length - 1][1] + 1);
//       }
//     }
//     if (freq[s[i]]) {
//       queue.push([s[i], i]);
//       freq[s[i]]--;
//       total--;
//     } else if (freq[s[i]] === 0) {
//       queue.splice(queue.findIndex(e => e[0] === s[i]), 1);
//       queue.push([s[i], i]);
//     }
//   }

//   if (total === 0) {
//     currentLength = queue[queue.length - 1][1] - queue[0][1] + 1;
//     if (minStr === "" || minStr.length > currentLength) {
//       minStr = s.substring(queue[0][1], queue[queue.length - 1][1] + 1);
//     }
//   }
//   return minStr;
// }

module.exports = minWindow;
