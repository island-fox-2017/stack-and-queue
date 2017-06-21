'use strict'

class Queue {
  constructor () {
      this.array = [];
  }

  queuePush(value){
    this.array.push(value);
  }

  queuePop(){
    this.array.shift();
  }

  listArray(){
    return this.array;
  }
}


let myQueue = new Queue();

console.log(myQueue);

myQueue.queuePush('anto');
myQueue.queuePush('andini');
myQueue.queuePush('yanto');
myQueue.queuePush('tomat');

console.log(myQueue.listArray());
myQueue.queuePop();
console.log(myQueue.listArray());
