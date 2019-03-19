const { isUnival, countUnival } = require("./unival-tree");

describe("isUnival", () => {
  it("should return true or false if all values of tree are the same", () => {
    let A3 = { val: 1, left: null, right: null };
    let A2 = { val: 1, left: null, right: null };
    let A1 = { val: 1, left: A2, right: A3 };

    let B3 = { val: 1, left: null, right: null };
    let B2 = { val: 2, left: null, right: null };
    let B1 = { val: 3, left: B2, right: B3 };

    expect(isUnival(A1)).toEqual(true);
    expect(isUnival(B1)).toEqual(false);
  });
});

describe("countUnival", () => {
  it("should return number of unival subtrees", () => {
    let A3 = { val: 1, left: null, right: null };
    let A2 = { val: 1, left: null, right: null };
    let A1 = { val: 1, left: A2, right: A3 };

    let B5 = { val: 2, left: null, right: null };
    let B4 = { val: 2, left: null, right: null };
    let B3 = { val: 1, left: null, right: null };
    let B2 = { val: 2, left: B4, right: B5 };
    let B1 = { val: 3, left: B2, right: B3 };

    expect(countUnival(A1)).toEqual(3);
    expect(countUnival(B1)).toEqual(4);
  });
});
