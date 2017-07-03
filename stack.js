'use strict'
const MAX = 3

// Your code implementation
class Stack {
  constructor() {
    this.data = []
  }

  size() {
    return this.data.length
  }

  stackPush(x) {
    if (!this.isFull()) {
      this.data.push(x)
    }
    else {
      console.log('array sudah full!')
    }
  }

  stackPop() {
    this.data.pop()
  }

  first() {
    return this.data[0]
  }

  last() {
    return this.data[this.data.length-1]
  }

  isEmpty() {
    if (this.data[0] != '') {
      return false
    }
    else {
      return true
    }
  }

  isFull() {
    if (this.data.length == MAX) {
      return true
    }
    else {
      return false
    }
  }

  stackPeep() {
    return this.data
  }
}


let stack1 = new Stack()
stack1.stackPush(1)
stack1.stackPush(3)
stack1.stackPush(5)
stack1.stackPush(7)
console.log(stack1.stackPeep())
console.log(stack1.isFull())
console.log(stack1.isEmpty())
console.log(stack1.size())
console.log(stack1.first())
console.log(stack1.last())

module.exports = Stack
