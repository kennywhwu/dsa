// Given a collection of intervals, merge all overlapping intervals.

// https://leetcode.com/problems/merge-intervals/

function merge(intervals) {
  if (intervals.length === 0 || intervals[0].length === 0) return [[]];
  intervals.sort((a, b) => a[0] - b[0]);
  let max = intervals[0][1];
  let current = intervals[0];
  let merged = [];
  for (let interval of intervals) {
    if (interval[0] <= max) {
      max = Math.max(max, interval[1]);
      current[1] = max;
    } else {
      merged.push([...current]);
      current = interval;
      max = interval[1];
    }
  }
  merged.push([...current]);
  return merged;
}

module.exports = merge;
