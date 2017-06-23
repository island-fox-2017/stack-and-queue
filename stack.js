'use strict'

// Your code implementation
class Stack {
  constructor(max_size) {
    this.max_size = max_size;
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  stackPush(x) {
    return this.data.push(x);
  }

  stackPop() {
    return this.data.pop();
  }

  first() {
    return this.data[0];
  }

  last() {
    return this.data[this.size() - 1];
  }

  isEmpty() {
    return this.size() === 0 // ? true : false
  }

  isFull() {
    return this.size() === this.max_size; // ? true : false
  }

  stackPeep() {
    return this.first();
  }
  
  stackPrint() {
    console.log(this.data);
  }
}

// Instance class
let myStack = new Stack()

// Cek apakah stack sudah ada isi atau kosong?
console.log(`The stack is empty ${myStack.isEmpty()}`); // true

// Tambahkan tiga data
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool Bro!');

// karena stack menggunakan tipe data array, kita bisa add tipe data apapun
// seperti string atau integer(number)
myStack.stackPush(15);

// lihat data paling atas
myStack.stackPeep(); // 15

// lihat semua data
myStack.stackPrint()

// lihat kita menghapus data satu per satu
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());
console.log(myStack.stackPop());

// cek lagi apakah stack nya masih ada isi atau sudah kosong?
console.log(`The Stack is empty ? ${myStack.isEmpty()}`); // false

//coba hapus stack kosong, apa yang terjadi ?
console.log(myStack.stackPop());

module.exports = Stack
