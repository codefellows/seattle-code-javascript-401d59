'use strict';

class StandardQueue {
  constructor(name) {
    this.name = name;
    this.data = {};
  }

  // adds an item to the Queue
  set(id, value) {
    this.data[id] = value;
    return id;
  }
  get(id) {
    return this.data[id];
  }
  remove(id) {
    let value = this.data[id]
    delete this.data[id];
    return value;
  }
}

class FifoQueue {
  constructor(name) {
    this.name = name;
    this.data = [];
  }

  add(value) {
    this.data.unshift(value);
    return this.data.length - 1;
  }
  peek() {
    return this.data[this.data.length - 1];
  } 
  getNext() {
    return this.data.pop();
  }
}

module.exports = {
  StandardQueue,
  FifoQueue
}