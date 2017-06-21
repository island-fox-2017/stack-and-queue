'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.array = [];
    this.max = 5;
  }

  size() {
    return this.array.length;
  }

  stackPush(x) {
    if(this.size() < this.max)
    {
        this.array.push(x);
    }
    else {
      console.log('Stack is full');
    }

  }

  stackPop() {
    this.array.pop();
    return 'data paling belakang di hapus'
  }

  first() {
    return this.array[0];
  }

  last() {
    return this.array[this.size()-1];
  }

  isEmpty() {
    if(this.size() == 0) return true;
    else return false;
  }

  isFull() {
    if(this.size() == this.max)
    {
      return true;
    }
    else {
      return false;
    }

  }

  stackPeep() {
    console.log(this.array[this.size()-1]);
  }

  allArray(){
    return this.array;
  }

}

let myStack = new Stack();

console.log(`the stack is empty ${myStack.isEmpty()}`);

myStack.stackPush('javascript');
myStack.stackPush('is just so');
myStack.stackPush('cool');

myStack.stackPush(15);
myStack.stackPush(15);
myStack.stackPush(15);

myStack.stackPeep();

console.log(myStack.isFull());
console.log(myStack.allArray());

console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

console.log(`the stack is empty? ${myStack.isEmpty()}`);

console.log(myStack.allArray());
module.exports = Stack;
