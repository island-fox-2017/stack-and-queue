'use strict'

// Your code implementation
class Stack {
  constructor(maksimum) {
    this.archive = [];
    this.maximum = maksimum;
  }

  size() {
    return this.archive.length;
  }

  stackPush(x) {
    return this.archive.push(x);
  }

  stackPop() {
    return this.archive.pop();
  }

  first() {
    return this.archive[0]
  }

  last() {
    return this.archive[this.archive.length-1];
  }

  isEmpty() {
    if (this.archive.length === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    return this.maximum === this.archive.length;
  }

  stackPeek() {
    return this.archive[this.archive.length-1];
  }
}

let myStack = new Stack(5)

//cek data apakah kosong atau tidak
console.log(`The stack is empty? ${myStack.isEmpty()}`); //true

//tambahkan data
myStack.stackPush("JavaScript")
myStack.stackPush("is just so")
myStack.stackPush("cool")

//cek isi data
console.log(myStack.archive);

//cek berapa banyak data sekarang
console.log(`The stack size: ${myStack.size()}`)

//tambahkan lagi data
myStack.stackPush(15)
myStack.stackPush('Pick me')

//cek data apakah kosong atau tidak
console.log(`The stack is empty? ${myStack.isEmpty()}`); //false

//cek isi data
console.log(myStack.archive);

//cek data apakah full/tidak
console.log(`The stack is full? ${myStack.isFull()}`);

//Lihat data paling atas
console.log(myStack.stackPeek());

//Hapus data satu persatu
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

console.log(`The stack is empty? ${myStack.isEmpty()}`);

console.log(myStack.stackPop()); //undefined

module.exports = Stack
