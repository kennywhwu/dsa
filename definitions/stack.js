// List made up of nodes with LIFO model
// Push and pop applied to beginning for constant runtime

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = this.first;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      throw new Error(`Nothing in stack`);
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

let stack = new Stack();

// Stack created as an array

class StackArray {
  constructor() {
    this.array = [];
  }

  push(val) {
    return this.array.push(val);
  }

  pop() {
    return this.array.pop();
  }

  peek() {
    return this.array[0];
  }

  isEmpty() {
    return this.array.length ? false : true;
  }
}

let stackArr = new StackArray();
