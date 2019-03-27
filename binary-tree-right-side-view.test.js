const rightSideView = require("./binary-tree-right-side-view");

describe("rightSideView", () => {
  it("should return array of level by level nodes from only right side view", () => {
    let A3 = { val: 1, left: null, right: null };
    let A2 = { val: 1, left: null, right: null };
    let A1 = { val: 1, left: A2, right: A3 };

    let B5 = { val: 2, left: null, right: null };
    let B4 = { val: 2, left: null, right: null };
    let B3 = { val: 1, left: null, right: null };
    let B2 = { val: 2, left: B4, right: B5 };
    let B1 = { val: 3, left: B2, right: B3 };

    expect(rightSideView(A1)).toEqual([1, 1]);
    expect(rightSideView(B1)).toEqual([3, 1, 2]);
  });
});
