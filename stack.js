'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.array = [];
  }

  size() {
    return this.array.length;
  }

  stackPush(x) {
    this.array.push(x);
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

myStack.stackPeep();
console.log(myStack.allArray());

console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

console.log(`the stack is empty? ${myStack.isEmpty()}`);

console.log(myStack.allArray());
module.exports = Stack;
