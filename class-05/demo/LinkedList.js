'use strict';

// Our container that stores values, and references to another node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Singly linked list class, stores a head node.
class LinkedList {
  constructor() {
    this.head = null;
  }

  // read all the value in the list.
  traverse() {
    let currentNode = this.head;
    while(currentNode instanceof Node) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log('Traversal Complete');
  }
  // add a new value to the head of the linked list
  prepend(value) {
    let node = new Node(value);
    if (this.head instanceof Node) {
      node.next = this.head;
    }
    this.head = node;
  }
  append(value) {
    let node = new Node(value);
    let current = this.head;
    while(current.next instanceof Node) {
      current = current.next;
    }
    current.next = node;
  }
}

let list = new LinkedList();
list.prepend('Sandwich');
list.prepend('Sun Screen');
list.prepend('First Aid!');

list.append('Flare Gun!');

// list.head = new Node('Sun Screen');
// list.head.next = new Node('First Aid!');
// list.head.next.next = new Node('Sandwhich');

// console.log('My List', JSON.stringify(list));
list.traverse();
console.log('here is the head', list.head);

module.exports = LinkedList;