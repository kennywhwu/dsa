const islandPerimeter = require("./island-perimeter");

describe("islandPerimeter", () => {
  it("should return integer of converted string, or 0 if no conversion", () => {
    expect(islandPerimeter([[1,1,0,0],[1,0,1,0],[1,1,1,0],[1,1,0,0]])).toEqual(18);
    expect(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]])).toEqual(16);
    expect(islandPerimeter([[1]])).toEqual(4);
    expect(islandPerimeter([[0]])).toEqual(0);
  });
});
