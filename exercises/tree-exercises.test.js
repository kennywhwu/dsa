const {
  Node,
  Tree,
  BiNode,
  BinaryTree,
  hasPathWithGivenSum,
  isTreeSymmetric,
} = require('./tree-exercises');

let root1 = new Node(10);
let b1 = new Node(1);
let b2 = new Node(15);
let b3 = new Node(25);
let c1 = new Node(0);
let c2 = new Node(5);
let c3 = new Node(12);
let c4 = new Node(20);
let d1 = new Node(2);

root1.children = [b1, b2, b3];
b1.children = [c1, c2];
b2.children = [c3, c4];
c2.children = [d1];

let root2 = new Node(-10);
root2.children = [b1, b2, b3];

let biC1 = new BiNode(1);
let biC2 = new BiNode(18);
let biB4 = new BiNode(24);
let biB3 = new BiNode(0);
let biB2 = new BiNode(9, biC2);
let biB1 = new BiNode(15, biC1);
let biA2 = new BiNode(5, biB3, biB4);
let biA1 = new BiNode(20, biB1, biB2);
let root3 = new BiNode(10, biA1, biA2);

let tree1 = new Tree(root1);
let tree2 = new Tree(root2);
let binaryTree = new BinaryTree(root3);

let serializeNode = new BiNode(1);
serializeNode.left = new BiNode(2);
serializeNode.right = new BiNode(3);
serializeNode.right.left = new BiNode(4);
serializeNode.right.right = new BiNode(5);
let serializeTree = new BinaryTree(serializeNode);

describe('sumValues', function() {
  it('returns sum of all integers in tree', function() {
    expect(tree1.sumValues()).toBe(90);
  });
});

describe('countEvens', function() {
  it('returns count of all even integers in tree', function() {
    expect(tree1.countEvens()).toBe(5);
  });
});

describe('minDepth', function() {
  it('returns minimum depth of tree', function() {
    expect(tree1.minDepth()).toBe(2);
  });
});

describe('maxDepth', function() {
  it('returns minimum depth of tree', function() {
    expect(tree1.maxDepth()).toBe(4);
  });
});

describe('maxSum', function() {
  it('returns maximum sum of integers along path from any start node to any node under it', function() {
    expect(tree1.maxSum()).toBe(45);
    expect(tree2.maxSum()).toBe(35);
  });
});

describe('nextLarger', function() {
  it('returns node with next larger value than passed-in integer in binary tree', function() {
    expect(binaryTree.nextLarger(11).val).toBe(15);
    expect(binaryTree.nextLarger(30)).toBe(null);
    expect(binaryTree.nextLarger(20).val).toBe(24);
  });
});

describe('areCousins', function() {
  it('returns true if two passed-in nodes share same level but different parents, otherwise false', function() {
    expect(binaryTree.areCousins(new Node(15), new Node(0))).toBe(true);
    expect(binaryTree.areCousins(new Node(15), new Node(9))).toBe(false);
    expect(binaryTree.areCousins(new Node(1), new Node(9))).toBe(false);
    expect(binaryTree.areCousins(new Node(1), new Node(18))).toBe(true);
    expect(binaryTree.areCousins(new Node(18), new Node(10))).toBe(false);
    expect(binaryTree.areCousins(new Node(20), new Node(5))).toBe(false);
  });
});

describe('findParent', function() {
  it('returns parent node of passed-in node', function() {
    expect(binaryTree.findParent(new Node())).toBe(undefined);
    expect(binaryTree.findParent(new Node(100))).toBe(undefined);
    expect(binaryTree.findParent(new Node(10))).toBe(undefined);
    expect(binaryTree.findParent(new Node(15)).val).toBe(20);
    expect(binaryTree.findParent(new Node(20)).val).toBe(10);
    expect(binaryTree.findParent(new Node(24)).val).toBe(5);
  });
});

describe('findRank', function() {
  it('returns level of passed-in node', function() {
    expect(binaryTree.findRank(new Node())).toBe(0);
    expect(binaryTree.findRank(new Node(100))).toBe(0);
    expect(binaryTree.findRank(new Node(10))).toBe(1);
    expect(binaryTree.findRank(new Node(15))).toBe(3);
    expect(binaryTree.findRank(new Node(15))).toBe(3);
  });
});

describe('numGreater', function() {
  it('returns count of nodes where value is greater than passed-in target', function() {
    expect(tree1.numGreater()).toBe(0);
    expect(tree1.numGreater(0)).toBe(8);
    expect(tree1.numGreater(-1)).toBe(9);
    expect(tree1.numGreater(1)).toBe(7);
    expect(tree1.numGreater(11)).toBe(4);
  });
});

// describe('serialize', function() {
//   it('returns count of nodes where value is greater than passed-in target', function() {
//     expect(serializeTree.serialize()).toBe();
//   });
// });

describe('lowestCommonAncestor', function() {
  it('returns count of nodes where value is greater than passed-in target', function() {
    const root = new BiNode(3);

    /* build left subtree */

    const left = new BiNode(5);
    root.left = left;

    const left_left = new BiNode(6);
    left.left = left_left;

    const left_right = new BiNode(2);
    left.right = left_right;

    const left_right_left = new BiNode(7);
    left_right.left = left_right_left;

    const left_right_right = new BiNode(4);
    left_right.right = left_right_right;

    /* build right subtree */

    const right = new BiNode(1);
    root.right = right;

    const right_left = new BiNode(0);
    right.left = right_left;

    const right_right = new BiNode(8);
    right.right = right_right;

    let LCATree = new BinaryTree(root);

    expect(binaryTree.lowestCommonAncestor(new Node(1), new Node(9))).toBe(20);
    expect(binaryTree.lowestCommonAncestor(new Node(18), new Node(24))).toBe(
      10
    );
    expect(binaryTree.lowestCommonAncestor(new Node(0), new Node(5))).toBe(5);
    expect(LCATree.lowestCommonAncestor(new Node(5), new Node(1))).toBe(3);
    expect(LCATree.lowestCommonAncestor(new Node(2), new Node(7))).toBe(2);
    expect(LCATree.lowestCommonAncestor(new Node(7), new Node(6))).toBe(5);
    expect(LCATree.lowestCommonAncestor(new Node(8), new Node(0))).toBe(1);
  });
});

describe('pathSum', function() {
  it('returns_array_of_all_paths_that_sum_to_target', function() {
    let biC4 = new BiNode(1);
    let biC3 = new BiNode(5);
    let biC2 = new BiNode(2);
    let biC1 = new BiNode(7);
    let biB4 = new BiNode(4, biC3, biC4);
    let biB3 = new BiNode(13);
    let biB1 = new BiNode(11, biC1, biC2);
    let biA2 = new BiNode(8, biB3, biB4);
    let biA1 = new BiNode(4, biB1);
    let root4 = new BiNode(5, biA1, biA2);

    let tree4 = new BinaryTree(root4);

    let result1 = tree4
      .pathSum(22)
      .map(arr => JSON.stringify(arr))
      .sort();
    let test1 = [[5, 4, 11, 2], [5, 8, 4, 5]]
      .map(arr => JSON.stringify(arr))
      .sort();
    expect(result1.sort()).toEqual(test1.sort());
  });
});

describe('hasPathWithGivenSum', function() {
  it('should_return_true_if_root_to_leaf_path_that_equals_passed_in_sum_exists', function() {
    t1 = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: {
            value: -2,
            left: null,
            right: null,
          },
          right: {
            value: -3,
            left: null,
            right: null,
          },
        },
      },
    };
    t2 = {
      value: 4,
      left: {
        value: 1,
        left: {
          value: -2,
          left: null,
          right: {
            value: 3,
            left: null,
            right: null,
          },
        },
        right: null,
      },
      right: {
        value: 3,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 2,
          left: {
            value: -4,
            left: null,
            right: null,
          },
          right: {
            value: -3,
            left: null,
            right: null,
          },
        },
      },
    };
    expect(hasPathWithGivenSum(t1, 7)).toEqual(true);
    expect(hasPathWithGivenSum(t2, 7)).toEqual(false);
    expect(hasPathWithGivenSum(null, 7)).toEqual(false);
  });
});

describe('isTreeSymmetric', function() {
  it('should_return_true_if_tree_is_symmetric_around_root_node', function() {
    t1 = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: {
          value: 4,
          left: null,
          right: null,
        },
      },
      right: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
    };
    t2 = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        value: 2,
        left: null,
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
    };
    t3 = { value: 1, left: null, right: null };
    t3a = {
      value: 1,
      left: { value: 2, left: null, right: null },
      right: { value: 2, left: null, right: null },
    };
    t4 = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: null,
          right: null,
        },
        right: {
          value: 4,
          left: null,
          right: null,
        },
      },
      right: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
    };
    t5 = {
      value: 99,
      left: {
        value: 100,
        left: null,
        right: null,
      },
      right: {
        value: 99,
        left: null,
        right: null,
      },
    };
    expect(isTreeSymmetric(t1)).toEqual(true);
    expect(isTreeSymmetric(t2)).toEqual(false);
    expect(isTreeSymmetric(null)).toEqual(true);
    expect(isTreeSymmetric(t3)).toEqual(true);
    expect(isTreeSymmetric(t3a)).toEqual(true);
    expect(isTreeSymmetric(t4)).toEqual(false);
    expect(isTreeSymmetric(t5)).toEqual(false);
  });
});
