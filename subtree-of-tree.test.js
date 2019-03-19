const isSubtree = require("./subtree-of-tree");

describe("isSubtree", () => {
  it("should return true or false if tree t is an exact subtree of s", () => {
    let A5 = { val: 2, left: null, right: null };
    let A4 = { val: 1, left: null, right: null };
    let A3 = { val: 5, left: null, right: null };
    let A2 = { val: 4, left: A4, right: A5 };
    let A1 = { val: 3, left: A2, right: A3 };

    let a5 = { val: 2, left: null, right: null };
    let a4 = { val: 1, left: null, right: null };
    let a2 = { val: 4, left: a4, right: a5 };

    let B6 = { val: 0, left: null, right: null };
    let B5 = { val: 2, left: B6, right: null };
    let B4 = { val: 1, left: null, right: null };
    let B3 = { val: 5, left: null, right: null };
    let B2 = { val: 4, left: B4, right: B5 };
    let B1 = { val: 3, left: B2, right: B3 };

    expect(isSubtree(A1, a2)).toEqual(true);
    expect(isSubtree(B1, a2)).toEqual(false);
  });
});
