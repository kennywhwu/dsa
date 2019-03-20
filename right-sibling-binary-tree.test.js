const siblingNode = require("./right-sibling-binary-tree");

describe("siblingNode", () => {
  it("should return node at same level to right of target", () => {
    let A9 = { val: 9, left: null, right: null };
    let A8 = { val: 8, left: null, right: null };
    let A7 = { val: 7, left: null, right: null };
    let A6 = { val: 6, left: null, right: A9 };
    let A5 = { val: 5, left: null, right: A8 };
    let A4 = { val: 4, left: A7, right: null };
    let A3 = { val: 3, left: null, right: A5 };
    let A2 = { val: 2, left: A4, right: A6 };
    let A1 = { val: 1, left: A2, right: A3 };

    expect(siblingNode(A1, 2)).toEqual(3);
    expect(siblingNode(A1, 3)).toEqual(null);
    expect(siblingNode(A1, 6)).toEqual(5);
    expect(siblingNode(A1, 4)).toEqual(6);
  });
});
