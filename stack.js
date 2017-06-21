'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.test = [];
  }

  size() {
    return this.test.length;
  }

  stackPush(x) {
    return this.test.push(x);
  }

  stackPop() {
    return this.test.pop()
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

  stackPeep() {
    return this.test.slice(-1).pop()
  }
}

let mystack = new Stack()

console.log(`The stack is empty ? ${mystack.isEmpty()}`);
console.log(`The stack is full ? ${mystack.isFull()}`);
mystack.stackPush('Javascript');
mystack.stackPush('is just so');
mystack.stackPush('cool');
mystack.stackPush(12);
mystack.stackPop()
console.log(mystack.last());

console.log(mystack.stackPeep());
console.log(mystack.size());


module.exports = Stack
