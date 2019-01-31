const { ListNode, addTwoNumbers } = require("./add-two-numbers");

describe("addTwoNumbers", () => {
  it("should return sum of two numbers as linked list", () => {
    let a = new ListNode(2);
    let b = new ListNode(4);
    let c = new ListNode(3);
    let d = new ListNode(5);
    let e = new ListNode(6);
    let f = new ListNode(4);
    a.next = b;
    b.next = c;
    d.next = e;
    e.next = f;
    let g = new ListNode(7);
    let h = new ListNode(0);
    let i = new ListNode(8);
    g.next = h;
    h.next = i;

    expect(addTwoNumbers(a, d)).toEqual(g);
  });
});
