// Tree made up of root with left and ride nodes
// Binary Search Tree specifically has 2 or less nodes, where left is lower and right is higher than root value

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.count = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (current) {
        if (val === current.val) {
          current.count++;
          break;
        } else if (val < current.val) {
          if (!current.left) {
            current.left = newNode;
            break;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (!current.right) {
            current.right = newNode;
            break;
          } else {
            current = current.right;
          }
        }
      }
    }
    return this;
  }

  find(val) {
    if (!this.root) return;
    let current = this.root;
    while (current) {
      if (val === current.val) return current;
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    return;
  }

  traverseBFS() {
    if (!this.root) return [];
    let queue = [];
    let visited = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let removedNode = queue.shift();
      visited.push(removedNode.val);
      if (removedNode.left) queue.push(removedNode.left);
      if (removedNode.right) queue.push(removedNode.right);
    }
    return visited;
  }

  traversePreOrder() {
    let visited = [];
    if (!this.root) return visited;
    function _traverse(node) {
      visited.push(node.val);
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return visited;
  }

  traversePostOrder() {
    let visited = [];
    if (!this.root) return visited;
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
      visited.push(node.val);
    }
    _traverse(this.root);
    return visited;
  }

  traverseInOrder() {
    let visited = [];
    if (!this.root) return visited;
    function _traverse(node) {
      if (node.left) _traverse(node.left);
      visited.push(node.val);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return visited;
  }
}

let tree = new BinarySearchTree();
tree
  .insert(10)
  .insert(1)
  .insert(0)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(20)
  .insert(12);
