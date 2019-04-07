// Given list of heights, number of drops, and index of drop, return the new heights

// https://leetcode.com/problems/pour-water

function pourWater(h, V, K) {
  for (let i = 0; i < V; i++) {
    let p = K;
    for (let j = K - 1; j >= 0; j--) {
      if (h[j] < h[p]) {
        p = j;
      }
      if (h[j] > h[p]) {
        break;
      }
    }
    if (h[p] < h[K]) {
      h[p]++;
    } else {
      p = K;
      for (let k = K + 1; k < h.length; k++) {
        if (h[k] < h[p]) {
          p = k;
        }
        if (h[k] > h[p]) {
          break;
        }
      }
      if (h[p] < h[K]) {
        h[p]++;
      } else {
        h[K]++;
      }
    }
  }
  return h;
}

module.exports = pourWater;
