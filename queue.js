'use strict'

class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.arr = [];
  }

  size() {
    return this.arr.length;
  }

  queueInsert(x) {
    if (this.isFull()) {
      return console.log('Queue is full');
    } else {
      return this.arr.unshift(x);
    }
  }

  queueRemove() {
    if (this.arr.length === 0) {
      return 'Queue is empty';
    } else {
      return this.arr.pop();
    }
  }

  first() {
    return this.arr[this.arr.length - 1];
  }

  last() {
    return this.arr[0];
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  isFull() {
    return this.arr.length === this.maxSize;
  }

  queuePeep() {
    return this.last();
  }

  getNewSize(newSize) {
    this.maxSize = newSize;
  }
}

let kyuw = new Queue(3);
console.log(kyuw.isEmpty());
console.log(kyuw.size());

kyuw.queueInsert('a');
kyuw.queueInsert('b');
kyuw.queueInsert('c');
console.log(kyuw.arr);

console.log(kyuw.first());
console.log(kyuw.last());
console.log(kyuw.queuePeep());
console.log(kyuw.isEmpty());
console.log(kyuw.isFull());

kyuw.queueInsert('d');
kyuw.getNewSize(4);

console.log(kyuw.isFull());
kyuw.queueInsert('d');
console.log(kyuw.size());
console.log(kyuw.isFull());
console.log(kyuw.arr);

kyuw.queueRemove()
kyuw.queueInsert('e')
console.log(kyuw.arr);
