'use strict'

class Queue {
  constructor (input) {
    this.input = input
    this.range = []
  }
  size() { //ngukur panjang inputan
  return this.range.length;
  }
  queuePush(Data) { //data inputan
  return this.range.push(Data);
  }
  queueShift() {//ngambil data inputan dari yg index.length-1
  return this.range.shift()
  }
  first() { //nampilin index pertama/0
    return this.range[0];
  }
  last() { //nampilin index terahir
    return this.range[this.range.length-1]
  }

  isEmpty() { //indikator kalo kosong =true
    return this.range == 0
  }

  isFull() {//indikator kalo kosong = true
    return this.range.length == this.input
  }

  stackPeep() {
    return this.last ();
  }
}

var ukur = new Queue(2);


ukur.queuePush("Ganang")
ukur.queuePush("Wahyu")
ukur.queuePush("Wicaksono")
console.log(ukur.queueShift());
console.log(ukur.first());
console.log(ukur.range);
console.log(ukur.last())
console.log(ukur.isEmpty());
console.log(ukur.isFull());
console.log(ukur.stackPeep());
console.log(ukur.size());
