'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.stack = [];
    this.MAX_SIZE = 5;
  }

  size() {
    return this.stack.length;
  }

  stackPush(x) {
    if (this.isFull())
      console.log('NOTIF: The stack is full!');
    else
      this.stack.push(x);
  }

  stackPop() {
    if (this.isEmpty()) {
      return "NOTIF: Nothing to be deleted!";
    }
    else { 
      this.stack.pop();
      return "NOTIF: The last element has been deleted!";
    }
  }

  first() {
    return this.stack[0]?this.stack[0]:"NOTIF: The array is Empty!";
  }

  last() {
    return this.stack[this.stack.length - 1]?this.stack[this.stack.length - 1]:"NOTIF: The array is Empty!";
  }

  isEmpty() {
    return this.stack[0]?false:true;
  }

  isFull() {
    return this.stack.length === this.MAX_SIZE? true:false;
  }

  stackPeek() {
    console.log(this.stack[this.stack.length - 1]);
  }
}

// TEST CASE
let myStack = new Stack(7);

console.log(`The stack is empty? ${myStack.isEmpty()}`) // true

myStack.stackPush("Javascript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
myStack.stackPush(15);

myStack.stackPeek();

console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

console.log(`The stack is empty? ${myStack.isEmpty()}`);

console.log(myStack.stackPop());

console.log(`The stack is full? ${myStack.isFull()}`);

console.log(myStack.size());
console.log(myStack.first());
console.log(myStack.last());

module.exports = Stack
