const findOrder = require("./course-schedule-ii");

describe("findOrder", () => {
  it("should return order of courses to take", () => {
    expect(findOrder(4, [[2, 0], [1, 0], [3, 1], [3, 2]])).toEqual([
      0,
      1,
      2,
      3,
    ]);
    expect(findOrder(4, [[2, 0], [1, 0], [3, 1], [3, 2], [1, 3]])).toEqual([]);
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
    expect(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toEqual([
      0,
      2,
      1,
      3,
    ]);
    expect(findOrder(2, [[1, 0], [0, 1]])).toEqual([]);
  });
});
