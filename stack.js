'use strict'

// Your code implementation
class Stack {
  constructor(max) {
    this.arr= [];
    this.max=max;
  }

  size() {
    return this.arr.length;
  }

  stackPush(x) {
    this.arr.push(x);
  }

  stackPop() {
    if(this.isEmpty()) {
      return 'You can get in, its empty!';
    } else {
      this.arr.pop();
      return this.stackPeep();
    }
  }

  first() {
    return this.arr[this.arr.length-1];
  }

  last() {
    return this.arr[0];
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
    if (this.size() == this.max ) {
      return 'Its FULL';
    } else {
      return `Come In, there's still plenty of room`;
    }
  }

  stackPeep() {
    return this.arr
  }
}

//push-in pop-out


//buat stack baru
let myStack = new Stack();
//Check apakah stack sudah ada isi atau kosong ?
console.log(`The stack is empty ? ${myStack.isEmpty()}`) // true
//True jika Stack kosong
//False jika Stack Memiliki suatu nilai atau lebih

//Tambahkan tiga
myStack.stackPush("Javascript");
myStack.stackPush("is just so");
myStack.stackPush("cool");
//
// //Karena Stack menggunakan Array
// bisa bisa add tipe data apapun seperti string dan interger
myStack.stackPush(15);

console.log("---YOUR FIRST DATA ---");
console.log(myStack.first());
console.log("---YOUR LAST DATA ---");
console.log(myStack.last());

console.log("---YOUR DATA IS ---");

console.log(myStack.stackPeep());

console.log("---- POP TIME ----");
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())
console.log(myStack.stackPop())

console.log(`The Stack is empty ? ${myStack.isEmpty()}`);

console.log(myStack.stackPop());

module.exports = Stack
