'use strict'

class Queue {
  constructor() {
    this.test = [];
  }

  size() {
    return this.test.length;
  }

  queuePush(x) {
    return this.test.push(x);
  }

  queuePop() {
    return this.test.shift()
  }

  first() {
    return this.test[0]
  }

  last() {
    return this.test.slice(-1)[0]
  }

  isEmpty() {
    if (this.test.length !== 0) {
      return false;
    } else {
      return true
    }
  }

  isFull() {
    if (this.test.length === 0) {
      return false;
    } else {
      return true
    }
  }

  queuePeep() {
    return this.test[0]
  }
}

let mystack = new Queue()

console.log(`The stack is empty ? ${mystack.isEmpty()}`);
console.log(`The stack is full ? ${mystack.isFull()}`);
mystack.queuePush('Javascript');
mystack.queuePush('is just so');
mystack.queuePush('cool');
mystack.queuePush(12);
mystack.queuePop()
console.log(mystack.last());

console.log(mystack.queuePeep());
console.log(mystack.size());
