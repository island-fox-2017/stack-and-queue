'use strict'

class Queue {
  constructor () {
    this.datas = [];
  }

  size() {
    return this.datas.length;
  }

  queueInsert(x) {
    this.datas.push(x);
  }

  queueRemove() {
    this.datas.shift();
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

  queuePeek() {
    console.log(this.datas[0]);
  }

  getData() {
    return this;
  }
}

let myQueue = new Queue();
//cek apakah sudah ada isi atau kosong?
console.log(`The queue is empty? ${myQueue.isEmpty()}`);
//tambahkan tiga
myQueue.queueInsert('JavaScript');
myQueue.queueInsert('is just so');
myQueue.queueInsert('cool');
/*
  karna queue menggunakan array,
  kita bisa add tipe data apapun seperti string dan integer
*/
myQueue.queueInsert(15);
//lihat data paling atas
myQueue.queuePeek();
//Lihat, kita menghapus data satu per satu
myQueue.queueRemove();
myQueue.queueRemove();
myQueue.queueRemove();
myQueue.queueRemove();
//cek lagi apakah stack-nya beneran kosong?
console.log(`The queue is empty? ${myQueue.isEmpty()}`);
//coba hapus stack kosong, apa yang terjadi?
myQueue.queueRemove();
//untuk mendapatkan seluruh data
console.log(myQueue.getData());
