const findFrequentTreeSum = require("./frequent-sum-tree");

describe("findFrequentTreeSum", () => {
  it("should return array of most frequent sum of subtrees", () => {
    let A3 = { val: -3, left: null, right: null };
    let A2 = { val: 2, left: null, right: null };
    let A1 = { val: 5, left: A2, right: A3 };

    let B3 = { val: -5, left: null, right: null };
    let B2 = { val: 2, left: null, right: null };
    let B1 = { val: 5, left: B2, right: B3 };

    let C5 = { val: 2, left: null, right: null };
    let C4 = { val: -1, left: null, right: null };
    let C3 = { val: 2, left: C4, right: C5 };
    let C2 = { val: 3, left: null, right: null };
    let C1 = { val: 1, left: C2, right: C3 };

    expect(findFrequentTreeSum(A1)).toEqual([2, 4, -3]);
    expect(findFrequentTreeSum(B1)).toEqual([2]);
    expect(findFrequentTreeSum(C1)).toEqual([3]);
  });
});
