class Node {
  constructor(val, next = null) {
    (this.val = val), (this.next = next);
  }
}

class SinglyLinkedList {
  constructor(node = null) {
    this.head = node;
    this.tail = node;
    this.length = node ? 1 : 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return;
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      return removedNode;
    }
    let current = this.head;
    while (current.next) {
      if (current.next === this.tail) {
        this.tail = current;
        this.tail.next = null;
        return removedNode;
      }
      current = current.next;
    }
  }

  shift() {
    if (!this.head) return;
    let removedNode = this.head;
    this.head = this.head.next;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
    removedNode.next = null;
    return removedNode;
  }

  get(idx) {
    if (!this.head || idx < 0 || idx >= this.length) return;
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === idx) return current;
      count++;
      current = current.next;
    }
  }

  remove(idx) {
    if (idx < 0 || idx >= this.length) return;
    if (idx === 0) return this.shift();
    if (idx === this.length) return this.pop();
    let current = this.get(idx - 1);
    let removedNode = current.next;
    current.next = removedNode.next;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }
}

function removeDuplicates(list) {
  let freq = {};
  if (!list || list.length <= 1) return list;
  let current = list.head;
  let counter = 0;
  while (current) {
    if (freq[current.val]) {
      list.remove(counter);
    } else {
      freq[current.val] = true;
    }
    counter++;
    current = current.next;
  }
  return list;
}

module.exports = { Node, SinglyLinkedList, removeDuplicates };
