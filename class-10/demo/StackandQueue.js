class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FiLo
class Stack {
  constructor() {
    this.top = null;
  }

  // adding a node to the top of a stack
  push(value) {
    let node = new Node(value);
    if (this.top) {
      node.next = this.top;
    }
    this.top = node;
  }

  // remove from the top
  pop() {
    if (this.top) {
      let value = this.top.value;
      this.top = this.top.next;
      return value;
    }
  }
}

// FiFo
class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    let node = new Node(value);
    if (this.back) {
      node.next = this.back;
    }
    if (!this.front) {
      this.front = node;
    }
    this.back = node;
  }

  dequeue() {
    if (this.back == this.front) {
      let value = this.front.value;
      this.front = null;
      this.back = null;
      return value;
    }

    let current = this.back;
    while(current.next !== this.front) {
      current = current.next;
    }
    // current should be the node right before the front
    let value = current.next.value;
    current.next = null;
    this.front = current;
    return value;
  }
}

let stack = new Stack();

stack.push('A');
stack.push('B');
stack.push('C');

let value1 = stack.pop();
let value2 = stack.pop();

// console.log(value1, value2, stack);

let queue = new Queue();
queue.enqueue('A');
queue.enqueue('B');
queue.enqueue('C');

let value = queue.dequeue();
value = queue.dequeue();
value = queue.dequeue();

console.log(value, queue);