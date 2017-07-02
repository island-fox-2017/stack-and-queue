'use strict'

// Your code implementation
class Stack {
  constructor(maximum) {
    this.max = maximum;
    this.arrStack = [];
  }

  size() {
    return 'Your current stack is: ' + this.arrStack.length;
  }

  stackPush(x) {
    if (this.isFull()) {
      return 'Sorry, data is already full.';
    } else {
      return this.arrStack.push(x);
    }
  }

  stackPop() {
    if (this.isEmpty()) {
      return 'Sorry, you can\'t delete anything from void'
    } else {
      return this.arrStack.pop();
    }
  }

  first() {
    return `Your first stack: ${this.arrStack[0]}`;
  }

  last() {
    let lastIndex = this.arrStack.length-1;
    return `Your last stack: ${this.arrStack[lastIndex]}`;
  }

  isEmpty() {
    return this.size === 0; //kosong saat length === 0
  }

  isFull() {
    return this.arrStack.length >= this.max; //penuh saat length === value dari parameter max
  }

  stackPeep() {
    return this.first();
  }
}

//INSTANCE
var deckOfCards = new Stack (8); //We try to stack 8 cards

//Private testcase
//Data push
deckOfCards.stackPush('2 Hearts');
deckOfCards.stackPush('King Hearts');
deckOfCards.stackPush('10 Clover');
deckOfCards.stackPush('4 Diamonds');
deckOfCards.stackPush('Jack Pikes');
deckOfCards.stackPush('Queen Diamonds');
deckOfCards.stackPush('Joker');
deckOfCards.stackPush('2 Pikes');

//Data check
console.log('=====DATA CHECK=====');
console.log('-----Your Stack-----');
console.log(deckOfCards.arrStack);
console.log('-----First Stack-----');
console.log(deckOfCards.first());
console.log('-----Last Stack-----');
console.log(deckOfCards.last());
console.log(deckOfCards.size());


//Data manipulations
console.log(' ');
console.log('=====DATA MANIPULATIONS=====');
console.log(deckOfCards.stackPush('3 Hearts'));



module.exports = Stack
