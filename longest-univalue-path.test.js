const longestUnivaluePath = require("./longest-univalue-path");

describe("longestUnivaluePath", () => {
  it("should return longest path of same value nodes", () => {
    let A6 = { val: 5, left: null, right: null };
    let A5 = { val: 1, left: null, right: null };
    let A4 = { val: 1, left: null, right: null };
    let A3 = { val: 5, left: null, right: A6 };
    let A2 = { val: 4, left: A4, right: A5 };
    let A1 = { val: 5, left: A2, right: A3 };

    let B6 = { val: 5, left: null, right: null };
    let B5 = { val: 4, left: null, right: null };
    let B4 = { val: 4, left: null, right: null };
    let B3 = { val: 5, left: null, right: B6 };
    let B2 = { val: 4, left: B4, right: B5 };
    let B1 = { val: 1, left: B2, right: B3 };

    expect(longestUnivaluePath(A1)).toEqual(2);
    expect(longestUnivaluePath(B1)).toEqual(2);
  });
});
