const {
  coinCollection,
  coinCollectionDirection,
} = require("./coin-collection");

describe("coinCollection", () => {
  it("should return array of directions to collect maximum number of coins", () => {
    let arr1 = [[1, 2, 10, 20], [4, 8, 2, 5], [1, 5, 3, 1]];
    expect(coinCollection(arr1)).toEqual(39);
  });
});
// describe("coinCollectionDirection", () => {
//   it("should return array of directions to collect maximum number of coins", () => {
//     let arr1 = [[1, 2, 10, 20], [4, 8, 2, 5], [1, 5, 3, 1]];
//     expect(coinCollectionDirection(arr1)).toEqual(["r", "r", "r", "d", "d"]);
//   });
// });
