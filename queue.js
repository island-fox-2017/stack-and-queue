'use strict'

class Queue {
  constructor (max) {
    this.arr= [];
    this.max= max;
  }

  size() {
    return this.arr.length;
  }

  queuePush(x) {
    this.arr.unshift(x)
  }

  queuePop() {
    if (this.isEmpty()) {
      return "You can get in, its Empty";
    }
    else {
      this.arr.pop();
      return this.queuePeep();
    }
  }

  first() {
    return this.arr[this.arr.length-1];
  }

  last() {
    return this.arr[0];
  }

  isEmpty() {
    if (this.size() === 0) {
      return true;
    }
    else {
      return false;
    }
  }

  isFull() {
    if (this.size() === this.max) {
      return 'Its Full';
    }
    else {
      return `Come In, there's still plenty of room`;
    }
  }

  queuePeep() {
    return this.arr
  }
}

//buat queue baru
let myQueue = new Queue();
//Check apakah Queue sudah ada isi atau kosong ?
console.log(`The Queue is empty ? ${myQueue.isEmpty()}`) // true

//Tambahkan tiga
myQueue.queuePush("Javascript");
myQueue.queuePush("is just so");
myQueue.queuePush("cool");
myQueue.queuePush(15);
// unshift-in pop-out

console.log("---YOUR FIRST DATA ---");
console.log(myQueue.first());
console.log("---YOUR LAST DATA ---");
console.log(myQueue.last());

console.log("---YOUR DATA IS ---");

console.log(myQueue.queuePeep());

console.log("---- POP TIME ----");
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())
console.log(myQueue.queuePop())

console.log(`The Queue is empty ? ${myQueue.isEmpty()}`);

console.log(myQueue.queuePop());

module.exports = Queue
