'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack = []
  }

  size() {
    return this.stack.length
  }


  stackPush(x) {
    this.stack.push(x)
  }

  stackPop() {
     return this.stack.pop()

  }

  first() {
  }

  last() {
  }

  isEmpty() {
    if(this.size()==0){
      return true
    }else {
      return false
    }
  }

  isFull() {
  }

  stackPeep() {
    console.log(this.stack[this.stack.length-1])
  }
}
let myStack = new Stack();
console.log(`The Stack is empty? ${myStack.isEmpty()}`);

myStack.stackPush('Javascript');
myStack.stackPush('is just so');
myStack.stackPush('cool');

myStack.stackPush(15);

myStack.stackPeep();

console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())


console.log(`The Stack is empty? ${myStack.isEmpty()}`);

console.log(myStack.stackPop())

module.exports = Stack
