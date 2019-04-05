const maxAreaOfIsland = require("./max-area-of-island");

describe("maxAreaOfIsland", () => {
  it("should return max area of island in 2D array", () => {
    expect(maxAreaOfIsland([[1,0,1,1],[1,1,0,0]])).toEqual(3);
    expect(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,1,1,0,1,0,0,0,0,0,0,0,0],
      [0,1,0,0,1,1,0,0,1,0,1,0,0],
      [0,1,0,0,1,1,0,0,1,1,1,0,0],
      [0,0,0,0,0,0,0,0,0,0,1,0,0],
      [0,0,0,0,0,0,0,1,1,1,0,0,0],
      [0,0,0,0,0,0,0,1,1,0,0,0,0]])).toEqual(6);
    expect(maxAreaOfIsland([[0,0,0,0,0,0]])).toEqual(0);
    expect(maxAreaOfIsland([[1]])).toEqual(1);
  });
});
