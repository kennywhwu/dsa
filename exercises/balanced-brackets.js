// Write function that takes in string
// Return true is string has balanced parentheses or brackets, false if not:
// (hi) [there] --> true
// (hello --> false
// (nope] --> false
// ((ok) [nope)] --> false

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

function balancedBrackets(str) {
  let bracketStack = new Stack();
  let current;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case '{':
        bracketStack.push('}');
        break;
      case '[':
        bracketStack.push(']');
        break;
      case '(':
        bracketStack.push(')');
        break;
      case '}':
      case ']':
      case ')':
        if (str[i] === bracketStack.first.val) {
          bracketStack.pop();
        } else {
          return false;
        }
        break;
    }
    if (bracketStack.size < 0) {
      return false;
    }
  }
  if (bracketStack.size !== 0) {
    return false;
  }
  return true;
}

module.exports = balancedBrackets;
