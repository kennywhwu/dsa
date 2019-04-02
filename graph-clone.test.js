const cloneGraph = require("./graph-clone");

describe("cloneGraph", () => {
  it("should return true or false if tree t is an exact subtree of s", () => {
    let A4 = { val: 4, neighbors: [] };
    let A3 = { val: 3, neighbors: [] };
    let A2 = { val: 2, neighbors: [] };
    let A1 = { val: 1, neighbors: [] };
    A1.neighbors = [A2, A4];
    A2.neighbors = [A1, A3];
    A3.neighbors = [A2, A4];
    A4.neighbors = [A1, A3];
    let a4 = { val: 4, neighbors: [] };
    let a3 = { val: 3, neighbors: [] };
    let a2 = { val: 2, neighbors: [] };
    let a1 = { val: 1, neighbors: [] };
    a1.neighbors = [a2, a4];
    a2.neighbors = [a1, a3];
    a3.neighbors = [a2, a4];
    a4.neighbors = [a1, a3];
    let B4 = { val: 4, neighbors: [] };
    let B3 = { val: 3, neighbors: [] };
    let B2 = { val: 2, neighbors: [] };
    let B1 = { val: 1, neighbors: [] };
    B1.neighbors = [B2, B3, B4];
    B2.neighbors = [B1, B3];
    B3.neighbors = [B2, B3, B4];
    B4.neighbors = [B1, B3];
    let b4 = { val: 4, neighbors: [] };
    let b3 = { val: 3, neighbors: [] };
    let b2 = { val: 2, neighbors: [] };
    let b1 = { val: 1, neighbors: [] };
    b1.neighbors = [b2, b3, b4];
    b2.neighbors = [b1, b3];
    b3.neighbors = [b2, b3, b4];
    b4.neighbors = [b1, b3];

    expect(cloneGraph(A1)).toEqual(a1);
    expect(cloneGraph(B1)).toEqual(b1);
  });
});
