// CircularList is an SLL that connects tail to head
// Rotating runtime is O(1), but getting item by index is O(n)

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class CircularList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printArray() {
    if (this.length === 0) {
      return;
    }
    let printedArray = [];
    let current = this.head;
    for (let i = 0; i < this.length; i++) {
      printedArray.push(current.val);
      current = current.next;
    }
    console.log(printedArray);
  }

  addItem(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.tail.next = this.head;
    this.length++;
    return this;
  }

  getItem(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.val;
  }

  rotate(val) {
    if (this.length <= 1) {
      return this;
    }
    let newHead = this.head;
    let newTail = this.tail;
    if (val >= 0) {
      for (let i = 0; i < val % this.length; i++) {
        newHead = newHead.next;
        newTail = newTail.next;
      }
    } else {
      for (let i = 0; i < this.length + (val % this.length); i++) {
        newHead = newHead.next;
        newTail = newTail.next;
      }
    }
    this.head = newHead;
    this.tail = newTail;

    return this;
  }
}

let circList = new CircularList();

circList.addItem(1);
circList.addItem(2);
circList.addItem(3);

// CircularArray is an array
// Rotating is O(n) and getting item by index runtime is O(1)

class CircularArray {
  constructor() {
    this.array = [];
  }

  printArray() {
    console.log(this.array);
  }

  addItem(val) {
    return this.array.push(val);
  }

  getItem(index) {
    return this.array[index];
  }

  rotate(val) {
    if (this.array.length <= 1) {
      return this.array;
    }
    let shift =
      val >= 0
        ? val % this.array.length
        : this.array.length - 1 + (val % this.array.length);
    let firstArray = this.array.slice(shift);
    let secondArray = this.array.slice(0, shift);
    this.array = firstArray.concat(secondArray);

    return this.array;
  }
}

let circArr = new CircularArray();

circArr.addItem(0);
circArr.addItem(1);
circArr.addItem(2);
