// List made up of nodes that are linked in two directions from head to tail (ie. head.next = nextNode, nextNode.prev = head)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  popa() {
    if (this.length <= 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
      return;
    }
    let removedNode = this.tail;
    if (this.length === 2) {
      this.head.next = null;
      this.tail = this.head;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.length--;
    return removedNode;
  }

  pop() {
    if (!this.head) {
      return;
    }
    let removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }
}

let list = new DoublyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
