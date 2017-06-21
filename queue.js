'use strict'

class Queue {
  constructor (maks) {
    this.antrian = []
    this.MAX_SIZE = maks
  }

 queueSize(){
   return this.antrian.length;
 }

 queueInsert(nilai) {
   if (this.isFull())
   return `antrian sudah penuh, max antrian = ${this.MAX_SIZE}, harus di pop dahulu supaya antrian baru bisa masuk`;
   else
   return this.antrian.push(nilai);
 }

 queueRemove() {
   if (this.queueSize() == 0)
   return `Antrian sudah habis`;
   return this.antrian.shift();
 }

 first() {
   return this.antrian[0]
 }

 last() {
   return this.antrian[this.size()-1]
 }

 isEmpty() {
   if (this.queueSize() === 0)
   return `antrian kosong`
   else
   `antrian masih ada isi sebanyak ${this.queueSize()}`
 }

 isFull() {
   return (this.queueSize() === this.MAX_SIZE)
   // else
   // return `Tumpukan masih bisa diisi, max: ${this.MAX_SIZE} dan saat ini: ${this.size()}`
 }

 queuePeep() {
   return console.log(this.first());
 }
}

let antriaBCA = new Queue(3);

console.log(antriaBCA.queueInsert('Adi'));
console.log(antriaBCA.queueInsert('Budi'));
console.log(antriaBCA.queueInsert('Chandra'));
console.log(antriaBCA.queueInsert('Dodi'));

console.log(antriaBCA.queueRemove());
