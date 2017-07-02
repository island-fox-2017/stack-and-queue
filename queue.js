'use strict'

class Queue {
  constructor(maximum) {
    this.max = maximum;
    this.queueLine = [];
  }

  size() {
    return 'Current people in line is: ' + this.queueLine.length;
  }

  queueInsert(x) {
    if (this.isFull()){
      return 'Sorry, there are no space left.';
    } else {
      return this.queueLine.push(x);
    }
  }

  queueComeInside(){
    if (this.isEmpty()){
      return 'The line is empty.';
    } else {
      return this.queueLine.shift();
    }
  }

  first() {
    return `First in queue: ${this.queueLine[0]}`;
  }

  last() {
    let lastIndex = this.queueLine.length - 1;
    return `Last in queue: ${this.queueLine[lastIndex]}`;
  }

  isEmpty() {
    return this.size === 0; //kosong saat length === 0
  }

  isFull() {
    return this.queueLine.length >= this.max; //penuh saat length === value dari parameter max
  }

  stackPeep() {
    return this.first();
  }
}//class

//INSTANCE
var iPhone8Line = new Queue (5); //There is 5 guys already in line at 2 AM

//Private testcase
//Data push
iPhone8Line.queueInsert('1. John');
iPhone8Line.queueInsert('2. Marquees');
iPhone8Line.queueInsert('3. Justine');
iPhone8Line.queueInsert('4. Lamarr');
iPhone8Line.queueInsert('5. Austin');

//Data check
console.log('  ');
console.log('Max line this morning is 5');
console.log('=====QUEUE CHECK=====');
console.log('-----Queue-----');
console.log(iPhone8Line.queueLine);
console.log('-----First Person-----');
console.log(iPhone8Line.first());
console.log('-----Last Person-----');
console.log(iPhone8Line.last());
console.log(iPhone8Line.size());


//Data manipulations
console.log(' ');
console.log('=====DATA MANIPULATIONS=====');
console.log('-----Someone\'s trying to get in line-----');
console.log(iPhone8Line.queueInsert('6. Lou'));
console.log('-----First person may come inside first-----');
console.log(iPhone8Line.queueComeInside());
console.log('-----Last person to come inside-----');
console.log(iPhone8Line.last());
