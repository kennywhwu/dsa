const flatten = require("./binary-tree-flatten");

describe("flatten", () => {
  it("should return flattened binary tree", () => {
    let A3 = { val: 1, left: null, right: null };
    let A2 = { val: 1, left: null, right: null };
    let A1 = { val: 1, left: A2, right: A3 };
    let a3 = { val: 1, left: null, right: null };
    let a2 = { val: 1, left: null, right: a3 };
    let a1 = { val: 1, left: null, right: a2 };

    let B5 = { val: 2, left: null, right: null };
    let B4 = { val: 2, left: null, right: null };
    let B3 = { val: 1, left: null, right: null };
    let B2 = { val: 2, left: B4, right: B5 };
    let B1 = { val: 3, left: B2, right: B3 };
    let b3 = { val: 1, left: null, right: null };
    let b5 = { val: 2, left: null, right: b3 };
    let b4 = { val: 2, left: null, right: b5 };
    let b2 = { val: 2, left: null, right: b4 };
    let b1 = { val: 3, left: null, right: b2 };

    expect(flatten(A1)).toEqual(a1);
    expect(flatten(B1)).toEqual(b1);
  });
});
