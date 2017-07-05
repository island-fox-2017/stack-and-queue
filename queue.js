'use strict'

class Queue {
  constructor (maksimum) {
    this.archive = [];
    this.maximum = maksimum;

  }
  size() {
    return this.archive.length;
  }

  queueInsert(x) {
    if(this.isFull()){console.log('data full')}
    else {return this.archive.push(x)};
  }

  queueRemove() {
    if(this.isEmpty()) {console.log('data empty')}
    else {return this.archive.shift()};
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
    if(this.archive.length === this.maximum) {return true}
    else {return false};
  }

  queuePeek() {
    return this.archive[this.archive.length-1];
  }
}

let myQueue = new Queue (5);

//cek data apakah kosong atau tidak
console.log(`The queue is empty? ${myQueue.isEmpty()}`); //true

//tambahkan data
console.log(myQueue.queueRemove());
myQueue.queueInsert("JavaScript")
myQueue.queueInsert("is just so")
myQueue.queueInsert("cool")

//cek isi data
console.log(myQueue.archive);

//cek berapa banyak data sekarang
console.log(`The queue size: ${myQueue.size()}`)

//tambahkan lagi data
myQueue.queueInsert(15)
myQueue.queueInsert('Pick me')

//cek data apakah kosong atau tidak
console.log(`The queue is empty? ${myQueue.isEmpty()}`); //false

//cek isi data
console.log(myQueue.archive);

//cek data apakh full/tidak
console.log(`The queue is full? ${myQueue.isFull()}`);

//Lihat data paling atas
console.log(myQueue.queuePeek());

//Hapus data satu persatu
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());
console.log(myQueue.queueRemove());

console.log(`The queue is empty? ${myQueue.isEmpty()}`);

console.log(myQueue.queueRemove()); //undefined
