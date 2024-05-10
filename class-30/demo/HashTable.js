'use strict';

const LinkedList = require('./LinkedList');

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  // find where in this.buckets something belongs
  getHash(key) {
    let asciiSum = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    return (asciiSum * 599) % this.size;
  }

  // add a value, to a specific bucket
  add(key, value) {
    let address = this.getHash(key);

    if (this.buckets[address]) {
      this.buckets[address].add(key + ':' +value);
    } else {
      let list = new LinkedList();
      list.add(key + ":" +value);
      this.buckets[address] = list;
    }
  }

  // read from a specific bucket
  get(key) {
    let address = this.getHash(key);

    if (this.buckets[address]) {
      return this.buckets[address].values()
    } else {
      console.log('Nothing stored yet');
    }
  }
}

let table = new HashTable(1024);

table.add('name', 'Jacob');
table.add('age', 34);
table.add('age', 54);
table.add('socks', 'orange');
table.add('socks', 'orange');
let value = table.get('age');

console.log(table, value);