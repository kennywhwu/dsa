const {
  reverseListIterative,
  reverseListRecursive,
  Node,
} = require("./reverse-linked-list");

describe("reverseListIterative", () => {
  it("should return reverse order of linked list iteratively", () => {
    let a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
    let ar = new Node(5, new Node(4, new Node(3, new Node(2, new Node(1)))));

    expect(reverseListIterative(a)).toEqual(ar);
  });
});
describe("reverseListRecursive", () => {
  it("should return reverse order of linked list recursively", () => {
    let a = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
    let ar = new Node(5, new Node(4, new Node(3, new Node(2, new Node(1)))));

    expect(reverseListRecursive(a)).toEqual(ar);
  });
});
