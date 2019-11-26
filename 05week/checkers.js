'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  constructor(color) {
    if (color === 'white') {
      this.symbol = String.fromCharCode(0x125CB)
    } else if (color === 'black') {
      this.symbol = String.fromCharCode(0x125CF)
    }
  }
}

class Board {
  constructor() {
    this.grid = []
    //in play checkers ...
    this.checkers = []
  }
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  // Your code here
  createCheckers() {
    //define our starting positions of the checkers on the grid
    let whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]]

    let blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]]

    //in a for loop, iterate over the range from 0-11 with each index
    //you want to instantiate a 'white/black' checker
    for (let i = 0; i < whitePositions.length; i++) {
      let whitePos = whitePositions[i]
      //instantiate a 'white' checker
      //place that checker on the grid at the corresponding position 
      //with the index in the positions array
      let whiteCheck = new Checker('white');
      this.grid[whitePos[0]][whitePos[1]] = whiteCheck

      //push the checker into your this.checkers array
      this.checkers.push(whiteCheck)
    }

    for (let j = 0; j < blackPositions.length; j++) {
      let blackPos = blackPositions[j]
      //instantiate a 'black' checker
      //place that checker on the grid at the corresponding position 
      //with the index in the positions array
      let blackCheck = new Checker('black');
      this.grid[blackPos[0]][blackPos[1]] = blackCheck
      //push the checker into your this.checkers array
      this.checkers.push(blackCheck)
    }
  }

  selectChecker(row, column) {
    //return the checker at that spot on this.grid
    return this.grid[row][column];
  }

  killChecker(){

  }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers();
  }

  moveChecker(start, end) {
    let splitStart = start.split('');
    let splitEnd = end.split('');

    let checker = this.board.selectChecker(splitStart[0], splitStart[1]);
    this.board.grid[splitStart[0]][splitStart[1]] = null;
    //set the spot at the end rowcol coord to the checker
    this.board.grid[splitEnd[0]][splitEnd[1]] = checker
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}