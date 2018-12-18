// Polish notation calculator displays mathematical calculation with operator first, followed by the first number, then the second number on which first will have operator applied to
// calc("+ 9 * 2 3") --> 9 + (2 * 3) == 15
// calc("/ 6 - 4 2") --> 6 / (4 - 2) == 3

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

function calc(str) {
  let operatorKey = {
    '+': function add(num1, num2) {
      return num1 + num2;
    },
    '-': function subtract(num1, num2) {
      return num1 - num2;
    },
    '*': function multiply(num1, num2) {
      return num1 * num2;
    },
    '/': function divide(num1, num2) {
      return num1 / num2;
    },
  };

  let revArr = reverseString(str).split(' ');
  let num1 = +revArr[1];
  let num2 = +revArr[0];
  let operator = revArr[2];

  let runningTotal = operatorKey[operator](num1, num2);

  for (let i = 3; i < revArr.length; i += 2) {
    runningTotal = operatorKey[revArr[i + 1]](+revArr[i], runningTotal);
  }

  return runningTotal;
}

module.exports = calc;
