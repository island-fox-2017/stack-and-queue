'use strict'

class Queue {
  constructor (maxi) {
    this.maxNum = maxi;
    this.arr = [];
  }
  size() {
    return this.arr.length;
  }

  queuePush(x) {
    if(this.isFull()) {return console.log('ban kempes bro')}
    else {return this.arr.push(x)}
    //return this.range.push(x)
  }

  queuePop() {
    return this.arr.pop()
  }

  first() {
    return this.arr[0]
  }

  last() {
    return this.arr[this.arr.length-1]
  }

  isEmpty() {
    return this.arr.length == 0
  }

  isFull() {
    return this.arr.length >= this.maxNum
  }

  queuePeep() {
    return this.first()
  }
}
}
