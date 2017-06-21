'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.datas = [];
  }

  size() {
    return this.datas.length;
  }

  stackPush(x) {
    this.datas.push(x);
  }

  stackPop() {
    this.datas.pop();
  }

  first() {
    return this.datas[0];
  }

  last() {
    return this.datas[this.size()-1];
  }

  isEmpty() {
    if (this.size() == 0) {
      return true;
    } else {
      return false;
    }
  }

  isFull() {
  }

  stackPeek() {
    console.log(this.datas[this.size()-1]);
  }

  getData() {
    return this;
  }
}

let myStack = new Stack();

//cek apakah sudah ada isi atau kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`);
//tambahkan tiga
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
/*
  karna stack menggunakan array,
  kita bisa add tipe data apapun seperti string dan integer
*/
myStack.stackPush(15);
//lihat data paling atas
myStack.stackPeek();
//Lihat, kita menghapus data satu per satu
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
myStack.stackPop();
//cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`);
//coba hapus stack kosong, apa yang terjadi?
myStack.stackPop();
//untuk mendapatkan seluruh data
console.log(myStack.getData());

module.exports = Stack
