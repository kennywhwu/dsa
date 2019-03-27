const zigZag = require("./tree-zig-zag");

describe("zigZag", () => {
  it("should return true or false if all values of tree are the same", () => {
    let A3 = { val: 3, left: null, right: null };
    let A2 = { val: 2, left: null, right: null };
    let A1 = { val: 1, left: A2, right: A3 };

    let B6 = { val: 0, left: null, right: null };
    let B5 = { val: 2, left: B6, right: null };
    let B4 = { val: 1, left: null, right: null };
    let B3 = { val: 5, left: null, right: null };
    let B2 = { val: 4, left: B4, right: B5 };
    let B1 = { val: 3, left: B2, right: B3 };

    expect(zigZag(A1)).toEqual([1, 3, 2]);
    expect(zigZag(B1)).toEqual([3, 5, 4, 1, 2, 0]);
  });
});
