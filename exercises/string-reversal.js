// Return reverse of passed in string
// 'hello' --> 'olleh'

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
      //       throw new Error(`Nothing in stack`);
      return;
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

function reverseString(str) {
  let revStr = '';
  let strStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    strStack.push(str[i]);
  }
  while (strStack.first) {
    revStr += strStack.pop().val;
  }
  return revStr;
}

module.exports = reverseString;
