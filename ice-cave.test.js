const { minSteps, _appendValidCoord } = require("./ice-cave");

describe("minSteps", () => {
  it("should return minimum number of steps to exit", () => {
    let arr1 = [[0, 0, 1, 0], [0, 0, 2, 0], [1, 0, 0, 0]];
    let arr2 = [
      [0, 0, 0, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 0, 0, 2],
      [1, 0, 0, 1, 0],
    ];
    expect(minSteps(arr1)).toEqual(2);
    expect(minSteps(arr2)).toEqual(3);
  });
});
