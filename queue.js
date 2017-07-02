'use strict'

// Your code implementation
class Queue {
  constructor(max) {
    this.max = max;
    this.arr = []
  }

  size() {
    return this.arr.length
  }

  queueInsert(x) {
    if (this.isFull()){
      return `Box is full`
    } else {
      this.arr.push(x)
      return `${x} has been inputed`
    }
  }

  queueRemove() {
    if(this.isEmpty()){
      return 'Box is empty'
    } else
    return this.arr.shift('')
  }

  first() {
    return this.arr[0]
  }

  last() {
    return this.arr[this.arr.length - 1]
  }

  isEmpty() {
    return this.arr.length === 0
  }

  isFull() {
    return this.arr.length == this.max
  }

  queuePeep() {
    return this.first()
  }
}

let queue = new Queue(3)
console.log(`The queue is empty? \n ${queue.isEmpty()}`);
console.log(`Input to the box ${queue.queueInsert('Item 1')}`)
console.log(`Input to the box ${queue.queueInsert('Item 2')}`)
console.log(`Input to the box ${queue.queueInsert('Item 3')}`)

console.log(queue.queueRemove());
console.log(queue);

// console.log(`The queue is empty? \n ${queue.isFull()}`);
// console.log(`The First queue is filled with ${queue.first()}`);
// console.log(`The Last queue is filled with ${queue.last()}`);
// 
// console.log("==============================================");
// 
// console.log(`Remove queue? ${queue.queueRemove()}`);
// console.log(`The queue is full? ${queue.isFull()}`);
// 

module.exports = Queue
