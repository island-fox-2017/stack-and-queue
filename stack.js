// 'use strict'

// Your code implementation
class Stack {
  constructor(maxSize) {
    this.numSize = maxSize,
    this.arrSize = [];
  }

  size() {
    return this.arrSize.length;
  }

  stackPush(x) {
    if(this.isFull()) {return console.log('Kebak')}
    else{return this.arrSize.push(x)}
  }

  stackPop() {
    return this.arrSize.pop();
  }

  first() {
    return this.arrSize[0];
  }

  last() {
    return this.arrSize[this.arrSize.length-1];
  }

  isEmpty() {
    return this.arrSize.length == 0
  }

  isFull() {
    return this.arrSize.length >= this.numSize
  }

  stackPeek() {
    return this.last()
  }
}

let objData = new Stack(5);

console.log(objData.isFull());
console.log(objData.isEmpty());
// console.log(objData.arrSize);
objData.stackPush(7);
objData.stackPush(2);
objData.stackPush(45);
objData.stackPush(88);
console.log(objData.size());
console.log(objData.arrSize);
objData.stackPush(62);
console.log(objData.size());
objData.stackPush(3);
console.log(objData.arrSize);
console.log(objData.isFull());
console.log(objData.first());
console.log(objData.last());
console.log(objData.stackPop());//pop mengeluarkan array input paling akhir/last in first out
console.log(objData.stackPeek());




// console.log(objData.size());



module.exports = Stack
