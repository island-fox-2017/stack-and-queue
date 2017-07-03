'use strict'
const MAX = 3

class Queue {
  constructor () {
    this.data = []
  }

  queueLihat() {
    return this.data
  }

  queuePush(input) {
    if (!this.isFull()) {
      this.data.push(input)
    }
    else {
      console.log('array sudah penuh!');
    }
  }

  queueShift() {
    this.data.shift()
  }

  isFull() {
    if (this.data.length == MAX) {
      return true
    }
    else {
      return false
    }
  }
}

let queue1 = new Queue()
queue1.queuePush(2)
queue1.queuePush(4)
queue1.queuePush(6)
queue1.queuePush(8)
console.log(queue1.queueLihat())
queue1.queueShift()
console.log(queue1.queueLihat())
