// Given array of integers, return maximum profit if can buy and sell stock multiple times

var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) profit += prices[i + 1] - prices[i];
  }
  return profit;
};

// var maxProfit = function(prices) {
//     let profit = 0;
//     let max = prices[0]
//     let min = prices[0]
//     for(let i = 1; i < prices.length; i++){
//         if(prices[i] < max){
//             profit += max - min
//             min = prices[i]
//             max = prices[i]
//         } else if(prices[i] <= min){
//             min = prices[i]
//             max = prices[i]
//         } else {
//             max = Math.max(max, prices[i])
//             if(i === prices.length-1) profit += max - min
//         }

//     }
//     return profit;
// };

module.exports = maxProfit;
