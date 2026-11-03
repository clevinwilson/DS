class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const newNode = new Node(data);
    let currentNode = this.root;

    if (currentNode == null) {
      this.root = newNode;
      return;
    }

    while (true) {
      if (newNode.value < currentNode.value) {
        if (currentNode.left == null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right == null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value) {
    let currentNode = this.root;

    while (currentNode != null) {
      if (value == currentNode.value) {
        return true;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(root, value) {
    if (root == null) {
      return null;
    }

    if (value < root.value) {
      root.left = this.deleteNode(root.left, value);
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value);
    } else {
      // Case 1: No children
      if (root.left == null && root.right == null) {
        return null;
      }

      // Case 2: Only right child
      if (root.left == null) {
        return root.right;
      }

      // Case 2: Only left child
      if (root.right == null) {
        return root.left;
      }

      // Case 3: Two children
      const successor = this.findMin(root.right);
      root.value = successor.value;

      root.right = this.deleteNode(root.right, successor.value);
    }

    return root;
  }

  //L-Root-R
  inOrder() {
    this.inOrderHelper(this.root);
  }

  inOrderHelper(node) {
    if (node != null) {
      this.inOrderHelper(node.left);
      console.log(node.value);
      this.inOrderHelper(node.right);
    }
  }

  //Root-L-R
  preOrder() {
    this.preOrderHelper(this.root);
  }

  preOrderHelper(node) {
    if (node != null) {
      console.log(node.value);
      this.preOrderHelper(node.left);
      this.preOrderHelper(node.right);
    }
  }

  //L-R-Root
  postOrder() {
    this.postOrderHelper(this.root);
  }

  postOrderHelper(node) {
    if (node !== null) {
      this.postOrderHelper(node.left);
      this.postOrderHelper(node.right);
      console.value(node.value);
    }
  }

  findMin(node) {
    while (node.left != null) {
      node = node.left;
    }

    return node;
  }

  findClosestValue(value) {
    let currentNode = this.root;
    let difference = Math.abs(this.root.value - value);
    let node = this.root;

    if (currentNode === null) return null;

    while (currentNode != null) {
      let currentD = Math.abs(currentNode.value - value);
      if (currentD < difference) {
        difference = currentD;
        node = currentNode;
      }

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }

    return node.value;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(8);
tree.insert(11);
tree.insert(4);
tree.insert(9);

// tree.delete(10);
// tree.inOrder();
// console.log(tree.search(10));

console.log(tree.findClosestValue(5));

