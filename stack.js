'use strict'

// Your code implementation
class Stack {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  stackPush(x) {
    if (this.isFull()) {
      return console.log('Stack is full');
    } else {
      return this.arr.push(x);
    }
  }

  stackPop() {
    if (this.arr.length === 0) {
      return 'Stack is empty';
    } else {
      return this.arr.pop();
    }
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  isFull() {
    return this.arr.length === this.maxSize;
  }

  stackPeep() {
    return this.last();
  }

  getNewSize(newSize) {
    this.maxSize = newSize;
  }
}

let setak = new Stack(3);
console.log(setak.isEmpty());
console.log(setak.size());

setak.stackPush('a');
setak.stackPush('b');
setak.stackPush('c');
console.log(setak.arr);

console.log(setak.first());
console.log(setak.last());
console.log(setak.stackPeep());
console.log(setak.isEmpty());
console.log(setak.isFull());

setak.stackPush('d');
setak.getNewSize(4);

console.log(setak.isFull());
setak.stackPush('d');
console.log(setak.size());
console.log(setak.isFull());
console.log(setak.arr);

setak.stackPop()
setak.stackPush('e')
console.log(setak.arr);

module.exports = Stack
