'use strict';

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let order = []

    const traverse = (node) => {
      order.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return order;    
  }
  inOrder() {
    let order = []

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      order.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }

    traverse(this.root);
    return order; 
  }
  postOrder() {
    let order = []

    const traverse = (node) => {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      order.push(node.value);
    }

    traverse(this.root);
    return order; 
  }

  breadthFirst() {
    let order = [];
    let queue = [];
    queue.unshift(this.root);

    while(queue.length) {
      let current = queue.pop();
      order.push(current.value);
      if (current.left) {
        queue.unshift(current.left);
      }
      if (current.right) {
        queue.unshift(current.right);
      }
    }

    return order;
  }
}

let tree = new BinaryTree();

tree.root = new TreeNode('A');
tree.root.left = new TreeNode('B');
tree.root.right = new TreeNode('C');
tree.root.left.left = new TreeNode('D');
tree.root.left.right = new TreeNode('E');
tree.root.right.left = new TreeNode('F');
tree.root.left.left.left = new TreeNode('H');
tree.root.right.left.left = new TreeNode('I');
tree.root.right.right = new TreeNode('G');

// let preOrderNodes = tree.preOrder();
// let inOrderNodes = tree.inOrder();
// let postOrderNodes = tree.postOrder();
let breadthOrder = tree.breadthFirst();
console.log(breadthOrder);