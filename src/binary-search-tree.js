const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  root() {
    if (!this.block) return null;
    return this.block; 
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.block) {
      this.block = newNode; 
      return;
    }
    let current = this.block;  
    while (true) {
      if (data < current.data) {
        if (!current.left) {
          current.left = newNode; 
          break;
        }
        current = current.left;
      } else if (data > current.data) {
        if (!current.right) {
          current.right = newNode;
          break; 
        }
        current = current.right;
      } else {
           break;
      }
    }
  }

  has(data) {
    let current = this.block;
    while (current) {
      if (data === current.data) {
        return true;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right; 
      }
    }
    return false;
  }

  find(data) {
    let current = this.block;
    while (current) { 
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right; 
      }
    }
    return null;
  }

  remove(data) {
    this.block = this.removeNode(this.block, data);
  }

  removeNode(node, data) {
    if (!node) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node; 
    } else {
      if (!node.left && !node.right) return null;
      if (!node.left) return node.right; 
      if (!node.right) return node.left;
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }
      node.data = minRight.data;
      node.right = this.removeNode(node.right, minRight.data);
      return node;
    }
  }

  min() {
    if (!this.block) return null;
    let current = this.block;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    if (!this.block) return null;
    let current = this.block;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};