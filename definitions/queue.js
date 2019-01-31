// List made up of nodes with FIFO model
// Enqueue applied on end, dequeue applied on beginning for constant runtime

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) {
      throw new Error(`Nothing in queue`);
    }
    let removedNode = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = removedNode.next;
    removedNode.next = null;
    this.size--;
    return removedNode;
  }

  peek() {
    return this.first;
  }

  isEmpty() {
    return this.size ? false : true;
  }
}

let queue = new Queue();
