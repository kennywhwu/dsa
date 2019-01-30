// Given two non-empty linked lists representing two non-negative integers in reversed order, add the two numbers and return it as a linked list (from LeetCode)

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var addTwoNumbers = function(l1, l2) {
  let current1 = l1;
  let current2 = l2;
  let carry = 0;
  let output;
  let prevNode;
  while (current1 || current2) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;
    let sum = val1 + val2 + carry;
    if (sum >= 10) {
      sum = sum % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    let newNode = new ListNode(sum);
    if (prevNode) {
      prevNode.next = newNode;
    } else {
      output = newNode;
    }
    prevNode = newNode;
    if (current1) current1 = current1.next;
    if (current2) current2 = current2.next;
  }
  if (carry) {
    prevNode.next = new ListNode(1);
  }
  return output;
};

module.exports = { ListNode, addTwoNumbers };
