// You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// https://leetcode.com/problems/coin-change/

var coinChange = function(coins, amount) {
  let countArray = Array.from({ length: amount + 1 }).fill(amount + 1);
  countArray[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        countArray[i] = Math.min(countArray[i], countArray[i - coins[j]] + 1);
      }
    }
  }
  return countArray[amount] > amount ? -1 : countArray[amount];
};

module.exports = coinChange;
