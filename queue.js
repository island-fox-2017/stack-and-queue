'use strict'

class Queue {
  constructor (input) {
    this.input = input
    this.range = []

  }
  size() { //ngukur panjang inputan
  return this.range.length;
  }
  stackPush(namaLengkap) { //data inputan
  return this.range.push(namaLengkap);
  }
  stackPop() {//ngambil data inputan dari yg index.length-1
  return this.range.pop()
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
console.log(ukur.size());
ukur.stackPush("Ganang")
ukur.stackPush("Wahyu")
ukur.stackPush("Wicaksono")
console.log(ukur.stackPop());
console.log(ukur.first());
console.log(ukur.range);
console.log(ukur.last())
console.log(ukur.isEmpty());
console.log(ukur.isFull());
console.log(ukur.stackPeep());
