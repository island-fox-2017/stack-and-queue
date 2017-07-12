'use strict'

// Your code implementation
class Stack {
  constructor(maxKapasitas) {
    this.stack = [];
    this.maxKapasitas = maxKapasitas
  }

  size() {
    return this.stack.length
  }

  stackPush(x) {
    if (this.isFull()) {
       console.log('Array Full');
    }else {
        this.stack.push(x)
    }

  }

  stackPop() {
      if(this.isEmpty()){
        return 'Kalau kosong tidak bisa di pop silahkan isi arraynya yah'
      }else {
        return this.stack.pop()
      }
  }

  first() {
    return this.stack[0]
  }

  last() {
    return this.stack[this.size-1]
  }

  isEmpty() {
    if(this.size()==0){
      return true
    }else {
      return false
    }
  }

  isFull() {
    if(this.size() == this.maxKapasitas){
      return true
    }else {
      return false
    }
  }

  stackPeep() {
    console.log(this.stack[this.stack.length-1])
  }
}
let myStack = new Stack(3);
console.log(`The Stack is empty? ${myStack.isEmpty()}`);
console.log(myStack.stackPop())

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
