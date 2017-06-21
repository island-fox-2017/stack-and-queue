'use strict'

class Queue {
  constructor () {
    this.queue = []
  }
  size() {
    return this.queue.length
  }
  isEmpty() {
    if(this.size()==0){
      return true
    }else {
      return false
    }
  }
  queuePeep() {
    console.log(this.queue)
  }
  queueInsert(input){
    this.queue.push(input)
  }
  queueRemove(){
    return this.queue.shift()
  }

}

let myQueue = new Queue();
console.log(`The Stack is empty? ${myQueue.isEmpty()}`);

myQueue.queueInsert('Javascript');
myQueue.queueInsert('is just so');
myQueue.queueInsert('cool');

myQueue.queueInsert(15);

myQueue.queuePeep();

console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())
console.log(myQueue.queueRemove())


console.log(`The Stack is empty? ${myQueue.isEmpty()}`);

console.log(myQueue.queueRemove())
