'use strict'

// Your code implementation
class Stack {
  constructor(kapasitas) {
    this.kapasitas = kapasitas
    this.stackArr = []
  }

  size() {
    return this.stackArr.length;
  }

  stackPush(x) {
    if(isFull){return "daya tampung sudah maximal";}
    else {return this.stackArr.push(x);}
  }

  stackPop() {
    return this.stackArr.pop();
  }

  first() {
    return this.stackArr[0];
  }

  last() {
    return this.stackArr[this.stackArr.length-1];
  }

  isEmpty() {
    return this.stackArr.length === 0 ? true : false;
  }

  isFull() {
    return this.stackArr.length == this.kapasitas;
  }

  stackPeep() {
    // return this.stackArr[this.stackArr.length-1]
    return last();
  }
}

var input1 = new Stack(5);
console.log(input1.stackPush(5));
console.log(input1.size());
module.exports = Stack
