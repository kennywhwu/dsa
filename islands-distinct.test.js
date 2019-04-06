const numDistinctIslands = require("./islands-distinct");

describe("numDistinctIslands", () => {
  it("should return number of distinct islands", () => {
    expect(
      numDistinctIslands([
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0],
      ])
    ).toEqual(2);
    expect(numDistinctIslands([[1, 0, 1]])).toEqual(1);
    expect(numDistinctIslands([[1]])).toEqual(1);
    expect(numDistinctIslands([[0]])).toEqual(0);
    expect(
      numDistinctIslands([
        [1, 1, 0, 1, 1],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [1, 1, 0, 1, 1],
      ])
    ).toEqual(3);
    expect(
      numDistinctIslands([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1],
        [0, 0, 0, 1, 1],
      ])
    ).toEqual(1);
  });
});
