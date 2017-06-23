'use strict'

class Queue {
  constructor (max_size) {
    this.max_size = max_size;
    this.data = [];
  }
  
  size(){
    return this.data.length;
  }
  
  queueInsert(x){
    return this.data.push(x);
  }
  
  queueRemove(){
    return this.data.shift();
  }
  
  first(){
    return this.data[this.size() - 1];
  }
  
  last(){
    return this.data[0];
  }
  
  isEmpty(){
    return this.size() === 0 // ? true : false
  }
  
  isFull(){
    return this.size() === this.max_size; // ? true : false
  }
  
  queueTop(){
    return this.first();
  }
  
  queuePrint(){
    console.log(this.data);
  }
}

// Instance class
let myQueue = new Queue();

// cek apakah queue sudah ada isi atau kosong ?
console.log(`This queue is empty ? : ${myQueue.isEmpty()}`); // true

// tambahkan tiga data
myQueue.queueInsert('JavaScript');
myQueue.queueInsert('is just so');
myQueue.queueInsert('cool bro!');

// karena queue menggunakan tipe data array, kita bisa add tipe data apapun
// seperti string dan integer(number)
myQueue.queueInsert(15);

// lihat data paling atas
myQueue.queueTop(); // 15

// lihat semua data
myQueue.queuePrint();

// lihat kita menghapus data satu per satu
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());

// cek lagi apakah queue nya beneran kosong ?
console.log(`This Queue is empty ? : ${myQueue.isEmpty()}`); // false

// coba hapus stack kosong, apa yang terjadi ?
console.log(myQueue.queueRemove());
