'use strict'

class Queue {
  constructor (maxKapasitas) {
    this.queue = []
    this.maxKapasitas = maxKapasitas;
  }
  size() {
    return this.queue.length
  }
  isFull() {
    if(this.size() == this.maxKapasitas){
      return true
    }else {
      return false
    }
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
    if (this.isFull()) {
       console.log('Array Full');
    }else {
        this.queue.push(input)
    }
  }
  queueRemove(){
    if(this.isEmpty()){
      return 'array sudah kosong'
    }else {
      return this.queue.shift()
    }

  }

}

let myQueue = new Queue(3);
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
