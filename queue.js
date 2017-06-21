'use strict'

class Queue {
  constructor (num) {
    this.check = num,
    this.arrQ = []
  }

  size() {
    return this.arrQ.length;
  }

  queueInsert(value) {
    if(this.isMax()) { return console.log("Masimal queue 3")}
    else{return this.arrQ.push(value)};
  }

  queueRemove() {
    return this.arrQ.shift()
  }

  first() {
    return this.arrQ[0]
  }

  last() {
    return this.arrQ[this.arrQ.length - 1]
  }

  isEmpty() {
    return this.arrQ.length == 0
  }

  isMax() {
    return this.arrQ.length >= this.check
  }

  queuePeek() {
    return this.first()
  }
}

let objQue = new Queue(3);
console.log(objQue.isEmpty());
objQue.queueInsert("Abjad");
objQue.queueInsert("Huruf");
console.log(objQue.isMax());
console.log(objQue.size());
console.log(objQue.arrQ);
objQue.queueInsert("Tanda Baca");
objQue.queueInsert("Kode");
console.log(objQue.check);
console.log(objQue.arrQ);
console.log(objQue.first());
console.log(objQue.last());
console.log(objQue.queueRemove());
console.log(objQue.arrQ);
console.log(objQue.queuePeek());


module.exports = Queue
