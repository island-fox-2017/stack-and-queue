'use strict'

class Queue {
  constructor() {
    this.queue = [];
  }
  
  queueInsert(x) {
    this.queue.push(x);
  }
  
  queueRemove() {
    if (this.queue[0])
      delete this.queue[0];
    else
      console.log("NOTIF: Nothing to be deleted!");
  }
  
  queueFirst() {
    console.log(this.queue[0]);
  }
  
  queueEmpty() {
    if (!this.queue[0]) {
      console.log("NOTIF: Queue is empty!");
      return true;
    }
    else {
      console.log("NOTIF: Queue is NOT empty!");
      return false;
    }
  }
}

let myQueue = new Queue();

myQueue.queueInsert(7);
//myQueue.queueRemove();
myQueue.queueEmpty();
myQueue.queueFirst();

console.log();
console.log();
console.log();