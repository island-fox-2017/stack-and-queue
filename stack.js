'use strict'

// Your code implementation
class Stack {
  constructor(max) {
    this.max = max
    this.arr = []
  }

  size() {
    return this.arr.length
  }

  stackPush(x) {
    if (this.isFull()) {
      return 'Box is full'
    } else {
      this.arr.push(x)
      return `${x} has been inputed`
    }
  }

  stackPop() {
    if (this.isEmpty()) {
      return 'Box is empty'
    } else
      return this.arr.pop('')
  }

  first() {
    return this.arr[0]
  }

  last() {
    return this.arr[this.arr.length - 1]
  }

  isEmpty() {
    return this.arr.length === 0
  }

  isFull() {
    return this.arr.length == this.max
  }

  stackPeep() {
    return this.last()
  }
}

let stack = new Stack(4)
console.log(`The stack is empty? \n ${stack.isEmpty()}`);

console.log(stack.stackPush('Item 1'))
console.log(stack.stackPush('Item 2'))
console.log(stack.stackPush('Item 3'))
console.log(stack.stackPush('Item 4'))


console.log(`The Stack is full? \n ${stack.isFull()}`);
console.log(`You cannot add item because ${stack.stackPush('Item 5')}`)

console.log(`First item inputed ${stack.first()}`);
console.log(`Last item inputed ${stack.last()}`);

console.log("==============================================");

console.log(`Out item from the box ${stack.stackPop('Item 4')}`);

console.log(`The Stack is full? \n ${stack.isFull()}`);
console.log(`${stack.stackPush('Item 5')}`)

console.log(`The Stack is full? \n ${stack.isFull()}`);

console.log(`First item inputed ${stack.first()}`);
console.log(`Last item inputed ${stack.last()}`);

module.exports = Stack
