"use strict";
// It is a complete implementation of unbalanced binary search tree.

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
    this.size = 0;
  }

  // insertNode function will add a new node in binary search tree;
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      this.size = 1;
      return this.root;
    }
    this.insertNewNode(this.root, newNode);

    return this.root;
  }
  insertNewNode(node, newNode) {
    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
        this.size++;
      } else {
        return this.insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
        this.size++;
      } else {
        return this.insertNewNode(node.right, newNode);
      }
    }
  }
  sizeOfBST() {
    return this.size;
  }
  isKeyPresent(val) {
    return !this.root
      ? false
      : this.root.val === val
      ? true
      : this.findKey(this.root, val);
  }
  findKey(node, key) {
    if (node.val === key) {
      return true;
    }

    if (key < node.val) {
      if (node.left === null) {
        return false;
      }
      return this.findKey(node.left, key);
    } else {
      if (node.right === null) {
        return false;
      }
      return this.findKey(node.right, key);
    }
  }
  inorderTraversal() {
    this.root === null ? "tree is empty" : this.inorder(this.root);
  }

  inorder(node) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.val);
    this.inorder(node.right);
  }
  // printing post order traversal of a tree;

  postOrderTraversal() {
    this.root === null ? "tree is empty" : this.postOrder(this.root);
  }

  postOrder(node) {
    if (!node) return;

    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.val);
  }
  // printing preorder traversal of a binary tree;

  preOrderTraversal() {
    this.root === null ? "tree is empty" : this.preOrder(this.root);
  }

  preOrder(node) {
    if (!node) return;
    console.log(node.val);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

let bst = new BinarySearchTree();
bst.insert(10);
bst.insert(20);
bst.insert(1);
bst.insert(14);
bst.insert(7);
bst.insert(17);
//console.log(bst.isKeyPresent(18));
//bst.insertNode(3);
bst.preOrderTraversal();
//console.log(bst, bst.sizeOfBST());
