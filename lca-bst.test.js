const lowestCommonAncestor = require("./lca-bst");

describe("lowestCommonAncestor", () => {
  it("should return lowest common ancestor of BST", () => {
    let A9 = { val: 5, left: null, right: null };
    let A8 = { val: 3, left: null, right: null };
    let A7 = { val: 9, left: null, right: null };
    let A6 = { val: 7, left: null, right: null };
    let A5 = { val: 4, left: A8, right: A9 };
    let A4 = { val: 0, left: null, right: null };
    let A3 = { val: 8, left: A6, right: A7 };
    let A2 = { val: 2, left: A4, right: A5 };
    let A1 = { val: 6, left: A2, right: A3 };

    expect(lowestCommonAncestor(A1,A2,A3)).toEqual(A1);
    expect(lowestCommonAncestor(A1,A4,A9)).toEqual(A2);
    expect(lowestCommonAncestor(A1,A2,A9)).toEqual(A2);
  });
});
