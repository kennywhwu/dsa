// List made up of nodes that are linked from head to tail in only one direction (ie. head.next = next node)

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.head) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      this.head = newNode;
      this.tail = this.head;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) {
      return;
    }
    let shiftedHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return shiftedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index);
    if (current) {
      current.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(val);
    } else if (index === this.length - 1) {
      return !!this.push(val);
    } else {
      let current = this.get(index - 1);
      let newNode = new Node(val);
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
      return true;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      let current = this.get(index - 1);
      let removedNode = current.next;
      current.next = current.next.next;
      this.length--;
      return removedNode;
    }
  }

  reverse() {
    if (this.length <= 1) {
      return this;
    }

    let current = this.head;
    this.head = this.tail;
    this.tail = current;

    let next;
    let prev = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList();
list.push(0);
list.push(1);
list.push(2);
list.push(3);
list.push(4);
