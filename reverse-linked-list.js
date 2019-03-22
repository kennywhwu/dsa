// Reverse a linked list iteratively and recursively

class Node {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}

function reverseListIterative(head) {
  let current = head,
    next = null,
    prev = null;

  while (current) {
    // current = 1 -> 2 -> 3
    prev = current.next; // prev = 2 -> 3 -> null
    current.next = next; // current.next = null -> 1 -> 2
    next = current; // next = 1 -> 2 -> 3
    current = prev; // current = 2 -> 3 -> null
  }

  return next;
}

function reverseListRecursive(head) {
  function _reverse(current, next, prev) {
    if (current === null) return next;
    prev = current.next;
    current.next = next;
    next = current;
    current = prev;
    return _reverse(current, next, prev);
  }

  return _reverse(head, null, null);
}

module.exports = { reverseListIterative, reverseListRecursive, Node };
