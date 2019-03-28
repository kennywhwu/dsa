const uniquePaths = require("./unique-paths");

describe("uniquePaths", () => {
  it("should return integer of converted string, or 0 if no conversion", () => {
    expect(uniquePaths(3, 2)).toEqual(3);
    expect(uniquePaths(2, 3)).toEqual(3);
    expect(uniquePaths(1, 1)).toEqual(1);
    expect(uniquePaths(7, 4)).toEqual(84);
  });
});
