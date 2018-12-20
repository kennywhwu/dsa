class Node {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  // insert(val) {
  //   let newNode = new Node(val);
  //   this.children.push(newNode);
  //   return newNode;
  // }
}

class BiNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  traverseBFS() {
    let visited = [];
    let queue = [];
    function _traverse(node) {
      visited.push(node.val);
      node.children.forEach(child => {
        queue.push(child);
      });
      queue.forEach((e, i, a) => {
        let current = a.shift();
        _traverse(current);
      });
    }
    _traverse(this.root);
    return visited;
  }

  traverseDFSPreOrder() {
    let visited = [];
    function _traverse(node) {
      visited.push(node.val);
      node.children.forEach(child => _traverse(child));
    }
    _traverse(this.root);
    return visited;
  }

  // Return sum of all integers in tree
  sumValues() {
    let values = this.traverseDFSPreOrder();
    let sum = 0;
    values.forEach(val => (sum += val));
    return sum;
  }

  // Return count of all even integers in tree
  countEvens() {
    let values = this.traverseDFSPreOrder();
    let count = 0;
    values.forEach(val => {
      if (val % 2 === 0) count++;
    });
    return count;
  }

  // Return minimum depth of tree
  minDepth() {
    let currentDepth = 1;
    let minDepth;
    function _traverse(node) {
      if (!node.children.length) {
        if (currentDepth < minDepth || minDepth === undefined)
          minDepth = currentDepth;
      }
      node.children.forEach(child => {
        currentDepth++;
        _traverse(child);
        currentDepth--;
      });
    }
    _traverse(this.root);
    return minDepth;
  }

  // Return maximum depth of tree
  maxDepth() {
    let currentDepth = 1;
    let maxDepth;
    function _traverse(node) {
      if (!node.children.length) {
        if (currentDepth > maxDepth || maxDepth === undefined)
          maxDepth = currentDepth;
      }
      node.children.forEach(child => {
        currentDepth++;
        _traverse(child);
        currentDepth--;
      });
    }
    _traverse(this.root);
    return maxDepth;
  }

  // Return maximum sum along path from any start node to any end node in tree
  maxSum() {
    // Create list of all nodes in tree to be used as starting nodes
    let visited = [];
    function _traverse(node) {
      visited.push(node);
      node.children.forEach(child => _traverse(child));
    }
    _traverse(this.root);

    // Define function to calculate running sum of path and compare against running max
    let max;
    let sum = 0;
    function _maxSum(node) {
      sum += node.val;
      if (sum > max || max === undefined) {
        max = sum;
      }
      node.children.forEach(child => {
        _maxSum(child);
        sum -= child.val;
      });
    }

    // Run _maxSum on starting with each node in tree (reset running sum to 0 after every path)
    visited.forEach(node => {
      _maxSum(node);
      sum = 0;
    });
    return max;
  }

  // Return count of nodes where value is greater than passed-in target
  numGreater(val) {
    let count = 0;
    function _traverse(node) {
      if (node.val > val) count++;
      node.children.forEach(child => _traverse(child));
    }
    _traverse(this.root);
    return count;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  nextLarger(target) {
    let nextLarger = null;
    function _traverse(node) {
      if (nextLarger === null) {
        if (node.val > target) nextLarger = node;
      } else if (node.val > target && node.val < nextLarger.val) {
        nextLarger = node;
      }
      if (node.left) _traverse(node.left);
      if (node.right) _traverse(node.right);
    }
    _traverse(this.root);
    return nextLarger;
  }

  // Return parent node of passed-in target node
  findParent(target) {
    if (target.val === this.root.val) return;

    let found = false;
    let parent;

    function _traverse(node) {
      if (node.val === target.val) {
        found = true;
        return;
      }
      if (node.left && !found) _traverse(node.left);
      if (node.right && !found) _traverse(node.right);
      if (parent) return;
      if (found) {
        parent = node;
      }
    }

    _traverse(this.root);
    return parent;
  }

  // Return rank/level of target node (assuming root is 1)
  findRank(target) {
    let counter = 0;
    let found;

    function _traverse(node) {
      counter++;
      if (node.val === target.val) {
        found = true;
        return;
      }
      if (node.left && !found) _traverse(node.left);
      if (node.right && !found) _traverse(node.right);
      if (!found) counter--;
    }

    _traverse(this.root);
    return counter;
  }

  // Return true if two nodes are same level and different parents, otherwise false
  areCousins(node1, node2) {
    if (node1.val === this.root.val || node2.val === this.root.val)
      return false;
    return (
      this.findParent(node1).val !== this.findParent(node2).val &&
      this.findRank(node1) === this.findRank(node2)
    );
  }

  // // Return serialized (stringified) version of tree (from LeetCode)
  // serialize() {
  //   let outputArray = [];
  //   function _serialize(node) {
  //     outputArray.push(node);
  //     if (node.left) _serialize(node.left);
  //     if (node.right) _serialize(node.right);
  //   }
  //   _serialize(this.root);
  //   console.log('serialized tree', JSON.stringify(outputArray));
  //   return JSON.stringify(outputArray);
  // }

  // Return lowest common ancestor of two nodes
  lowestCommonAncestor(node1, node2) {
    let path1 = [];
    let path2 = [];

    let found;
    function _traverse(target, node, path) {
      path.push(node.val);
      if (target.val === node.val) {
        found = true;
        return;
      }
      if (node.left && !found) _traverse(target, node.left, path);
      if (node.right && !found) _traverse(target, node.right, path);
      if (!found) {
        path.pop();
      } else {
        return;
      }
    }
    _traverse(node1, this.root, path1);
    found = false;
    _traverse(node2, this.root, path2);

    for (let i = 0; i < path1.length; i++) {
      if (path1[i] !== path2[i]) return path1[i - 1];
    }
    return Math.min(path1.length, path2.length) - 1;
  }
}

module.exports = {
  Node,
  Tree,
  BiNode,
  BinaryTree,
};
