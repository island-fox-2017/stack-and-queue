'use strict'

// Your code implementation
class Stack{
  constructor(max) {
    this.tumpukan = [];
    this.MAX_SIZE = max;
  }

  size() {
    return this.tumpukan.length;
  }

  stackPush(nilai) {
    if (this.isFull()) return `tumpukan sudah penuh, max tumpukan = ${this.MAX_SIZE}`;
    else return this.tumpukan.push(nilai);
  }

  stackPop() {
    if (this.size() == 0) return `Tumpukan sudah habis`;
    return this.tumpukan.pop();
  }

  first() {
    return this.tumpukan[0]
  }

  last() {
    return this.tumpukan[this.size()-1]
  }

  isEmpty() {
    if (this.size() === 0)
      return `tumpukan kosong`
    else
      `tumpukan masih ada isi yaitu, ${this.size()}`
  }

  isFull() {
    return (this.size() === this.MAX_SIZE)

  }

  stackPeep() {
    return console.log(this.first());
  }
}

let tumpukanBaru = new Stack(10);

tumpukanBaru.stackPush(1);
tumpukanBaru.stackPush(2);
tumpukanBaru.stackPush(3);
tumpukanBaru.stackPush(4);
tumpukanBaru.stackPush(5);
tumpukanBaru.stackPush(6);
tumpukanBaru.stackPush(7);
tumpukanBaru.stackPush(8);
tumpukanBaru.stackPush(9);
tumpukanBaru.stackPush(10);
tumpukanBaru.stackPush(11);
tumpukanBaru.first();
tumpukanBaru.last();

// tumpukanBaru.stackPop();
console.log(tumpukanBaru.stackPop());
console.log(tumpukanBaru.stackPop());
console.log(tumpukanBaru.stackPop());
console.log(tumpukanBaru.stackPop());
console.log(tumpukanBaru.first());
console.log(tumpukanBaru.last());
console.log(tumpukanBaru.size());
//console.log(tumpukanBaru.stackPush('ulala'));
module.exports = Stack
