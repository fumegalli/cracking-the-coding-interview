class TreeNode {
  value;
  left = null;
  right = null;

  constructor(value) {
    this.value = value;
  }
}

class BTree {
  root = null;

  _searchRecursive(value, currentNode) {
    if (currentNode === null) return false;
    if (currentNode.value === value) return true;
    if (value > currentNode.value) return this._searchRecursive(value, currentNode.right);
    if (value < currentNode.value) return this._searchRecursive(value, currentNode.left);
  }

  search(value) {
    return this._searchRecursive(value, this.root);
  }

  insert(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return;
    }
    let currentNode = this.root;
    let inserted = false;
    while (!inserted) {
      if (value > currentNode.value) {
        if (currentNode.right) {
          currentNode = currentNode.right;
        } else {
          inserted = true;
          currentNode.right = new TreeNode(value);
        }
      } else {
        if (currentNode.left) {
          currentNode = currentNode.left;
        } else {
          inserted = true;
          currentNode.left = new TreeNode(value);
        }
      }
    }
  }

  preOrderTraversal() {
    const sequence = [];
    this._preOrderRecursive(this.root, sequence);
    return sequence;
  }

  _preOrderRecursive(currentNode, sequence) {
    sequence.push(currentNode.value);
    if (currentNode.left) this._preOrderRecursive(currentNode.left, sequence);
    if (currentNode.right) this._preOrderRecursive(currentNode.right, sequence);
  }

  inOrderTraversal() {
    const sequence = [];
    this._inOrderTraversalRecursive(this.root, sequence);
    return sequence;
  }

  _inOrderTraversalRecursive(currentNode, sequence) {
    if (currentNode.left) this._inOrderTraversalRecursive(currentNode.left, sequence);
    sequence.push(currentNode.value);
    if (currentNode.right) this._inOrderTraversalRecursive(currentNode.right, sequence);
  }

  postOrderTraversal() {
    const sequence = [];
    this._postOrderTraversalRecursive(this.root, sequence);
    return sequence;
  }

  _postOrderTraversalRecursive(currentNode, sequence) {
    if (currentNode.left) this._postOrderTraversalRecursive(currentNode.left, sequence);
    if (currentNode.right) this._postOrderTraversalRecursive(currentNode.right, sequence);
    sequence.push(currentNode.value);
  }
}

module.exports = BTree;
