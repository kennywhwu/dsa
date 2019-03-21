const intersection = require("./intersection");

describe("intersection", () => {
  it("should return list of all common integers between two arrays", () => {
    expect(intersection([4, 2, 3, 6], [1, 7, 9, 4, 2])).toEqual([4, 2]);
  });
});
