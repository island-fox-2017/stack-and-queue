'use strict'

class Queue
{
  constructor ()
  {
    this.arr = []


  }

    size()
    {
      return this.arr.length = 5;
    }

    queuepush(x)
    {
      this.arr.push(x)
      return "Push Berhasil";
    }

    queuePop()
    {
      return this.arr.pop()
    }

    isEmpty()
    {
      if(this.arr.length == 0)
      {
        return "Queue still empty";
      }
      else
      {
        return "Queue is filled";
      }

    isFull()
    {
      if(this.size() == 5)
      {
        return "Sorry queue is full";
      }
      else
      {
        return "The queue can still be filled again"
      }
    }

    queuePeep()
    {
      return this.arr[0];
    }
  }
}

let myQueue = new Queue();

console.log(`The stack is empty? ${myQueue.isEmpty()}`);
