// Given array of integers, return maximum profit for buying and selling stock once

var maxProfit = function(prices) {
  let max = 0;
  let min = prices[0];
  for (let price of prices) {
    max = Math.max(max, price - min);
    min = Math.min(min, price);
  }
  return max;
};

module.exports = maxProfit;
