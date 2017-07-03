'use strict'

class Queue {
  constructor(kapasitas) {
    this.kapasitas = kapasitas
    this.queueArr = []
  }

  size() {
    return this.queueArr.length;
  }

  queuePush(x) {
    if(this.queueArr.length == this.kapasitas){return "daya tampung sudah maximal";}
    else {
      return this.queueArr.push(x);
    }
  }

  queueRemove() {
    return this.queueArr.shift();
  }

  first() {
    return this.queueArr[0];
  }

  last() {
    return this.queueArr[this.queueArr.length-1];
  }

  isEmpty() {
    return this.queueArr.length === 0 ? true : false;
  }

  isFull() {
    return this.queueArr.length == this.kapasitas;
  }

  queuePeep() {
    // return this.stackArr[this.stackArr.length-1]
    return last();
  }
}

let queue1 = new Queue(5);
console.log(`Antrian ini kosong? ${queue1.isEmpty()}`);
queue1.queuePush('Masakan');
console.log(queue1);
console.log(`Antrian ini kosong? ${queue1.isEmpty()}`);
queue1.queuePush('Minuman');
queue1.queuePush('Snack');
console.log(queue1);

console.log(`Yang pertama masuk : ${queue1.first()}`);
