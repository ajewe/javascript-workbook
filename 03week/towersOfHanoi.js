'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(start, end) {
  let startStack = stacks[start];
  let endStack = stacks[end];
  //splice off the last element of the start array
  let splicedStart = startStack.pop();
  //add it to the end of the end array
  endStack.push(splicedStart);
}

function isLegal(start, end) {

  let startArray = stacks[start];
  let endArray = stacks[end];

  // Illegal because moving from empty stack
  if (startArray.length === 0) {
    console.log('invalid move!');
    return false;
  }
  // if end column is empty, move is legal
  if (endArray.length === 0) {
    return true;
  }

  let startElement = startArray[startArray.length - 1];
  let endElement = endArray[endArray.length - 1];

  if (start === end) {
    console.log('invalid move!');
    return false;
  }

  //if the last element of the end column has a higher number, not legal
  if (startElement > endElement ) {
    console.log('invalid move!');
    return false;
  } 
  return true;
}

function checkArrayMatch(checkArray, winningArray) {
  if (checkArray.length !== winningArray.length) {
    return false;
  } else {
    for (let i=0; i<checkArray.length; i++) {
      if (checkArray[i] !== winningArray[i]) {
        return false;
      }
    }
    return true;
  }
}

function checkForWin() {
  let checkbArray = stacks['b'];
  let checkcArray = stacks['c'];
  let winningArray = [4, 3, 2, 1];
  let checkB = checkArrayMatch(checkbArray, winningArray);
  let checkC = checkArrayMatch(checkcArray, winningArray)
  
  if (checkB || checkC) {
    console.log('Weiner!!!!!')
    return true;
  } else {
    return false;
  }
}

function towersOfHanoi(startStack, endStack) {
  if (isLegal(startStack, endStack)) {
    movePiece(startStack, endStack);
    checkForWin();
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
