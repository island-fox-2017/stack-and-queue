'use strict'

// Your code implementation
class Stack {
  constructor(maxi) {
    this.kuantitas = maxi;
    this.range = [];
  }

  size() {
    return this.range.length;
  }

  stackPush(x) {
    if(this.isFull()) {return console.log('ban kempes bro')}
    else {return this.range.push(x)}
    //return this.range.push(x)
  }

  stackPop() {
    return this.range.pop()
  }

  first() {
    return this.range[0]
  }

  last() {
    return this.range[this.range.length-1]
  }

  isEmpty() {
    return this.range.length== 0
  }

  isFull() {
    return this.range.length >= this.kuantitas
  }

  stackPeep() {
    return this.last()
  }
}

var persen = new Stack(5)
console.log(persen.isEmpty());
persen.stackPush(3);
persen.stackPush(4);
persen.stackPush(5);
persen.stackPush(6);
persen.stackPush(8);
persen.stackPush(10);

console.log(persen.isFull());
console.log(persen.size());
console.log(persen.range);
console.log(persen.first())
console.log(persen.last());
console.log(persen.stackPop());
console.log(persen.range);
console.log(persen.isFull());
console.log(persen.stackPeep());

module.exports = Stack
