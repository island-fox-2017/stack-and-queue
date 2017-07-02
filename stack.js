'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.arr = [];

    // this.long = this.arr.length
  }

  size() {
    return this.arr.length = 3;
  }

  stackPush(x) {
    this.arr.push(x);
    return "Push berhasil";
  }

  stackPop() {
    return this.arr.pop();
  }

  first() {
    return this.arr[0];
  }

  last() {
    return this.arr.slice(-1).pop
  }

  isEmpty() {
    if(this.arr.length == 0)
    {
      return true;
    }
    else{
      return false;
    }
  }

  isFull() {
    if(this.size() == 3 )
    {
      return "Sorry, stack is Full";
    }
    else {
      return "The stack can still be filled again";
    }
  }

  stackPeep() {
    return this.last();
  }
}

let myStack = new Stack();

console.log(`The stack is empty? ${myStack.isEmpty()}`);

myStack.stackPush("JavaScript");
myStack.stackPush("is just so");
myStack.stackPush("cool");

myStack.stackPush(15);
myStack.stackPush("last");

myStack.stackPeep();

console.log(myStack.isFull());

console.log(myStack);
// console.log(myStack.stackPush("Java Script"));
//
// console.log(myStack.stackPush("ULER"));
//
// console.log(myStack.size());
//
// console.log(myStack.stackPop());

// myStack.stackPop();



module.exports = Stack
