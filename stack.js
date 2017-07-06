'use strict'

// Your code implementation
class Stack {
  constructor() {
    this.datas = [];
    this.maxSize = 3
  }

  size() {
    return this.datas.length;
  }

  stackPush(x) {
    if (this.isFull()) {
      return `udah penuh`
    } else {
        this.datas.push(x);
    }
  }

  stackPop() {
    if(this.datas.length == 0) {
      return `Maaf tidak ada data`
    } else {
        this.datas.pop();
    }

  }

  first() {
    return this.datas[0];
  }

  last() {
    return this.datas[this.size()-1];
  }

  isEmpty() {
    if (this.size() == 0) {
      return 'udah penuh';
    } else {
      return false;
    }
  }

  isFull() {
    if(this.datas.length == this.maxSize) {
      return true
    }
  }

  stackPeek() {
    console.log(this.datas[this.size()-1]);
  }

  getData() {
    return this;
  }
}

let myStack = new Stack(3);

//cek apakah sudah ada isi atau kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`);
console.log(myStack.stackPop());
//tambahkan tiga
myStack.stackPush('JavaScript');
myStack.stackPush('is just so');
myStack.stackPush('cool');
/*
  karna stack menggunakan array,
  kita bisa add tipe data apapun seperti string dan integer
*/
myStack.stackPush(15);
console.log(myStack.stackPush(15));
//lihat data paling atas
myStack.stackPeek();
//Lihat, kita menghapus data satu per satu
// myStack.stackPop();
// myStack.stackPop();
// myStack.stackPop();
// myStack.stackPop();
//cek lagi apakah stack-nya beneran kosong?
console.log(`The stack is empty? ${myStack.isEmpty()}`);
//coba hapus stack kosong, apa yang terjadi?
myStack.stackPop();
//untuk mendapatkan seluruh data
// console.log(myStack.getData());

module.exports = Stack
