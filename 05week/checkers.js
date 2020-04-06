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
    //in play checkers 
    this.checkers = []
  }

  createGrid() {
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }

  viewGrid() {
    let string = "  0 1 2 3 4 5 6 7\n";

    for (let row = 0; row < 8; row++) {
      const rowOfCheckers = [row];
      for (let column = 0; column < 8; column++) {
        // if the location contains a checker piece
        if (this.grid[row][column]) {
          // push the symbol of the checker in that location into the array
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

  createCheckers() {
    //define our starting positions of the checkers on the grid
    let whitePositions = [[0, 1], [0, 3], [0, 5], [0, 7],
    [1, 0], [1, 2], [1, 4], [1, 6],
    [2, 1], [2, 3], [2, 5], [2, 7]]

    let blackPositions = [[5, 0], [5, 2], [5, 4], [5, 6],
    [6, 1], [6, 3], [6, 5], [6, 7],
    [7, 0], [7, 2], [7, 4], [7, 6]]

    for (let i = 0; i < whitePositions.length; i++) {
      let whitePos = whitePositions[i]
      let whiteCheck = new Checker('white');
      this.grid[whitePos[0]][whitePos[1]] = whiteCheck
      this.checkers.push(whiteCheck)
    }

    for (let j = 0; j < blackPositions.length; j++) {
      let blackPos = blackPositions[j]
      let blackCheck = new Checker('black');
      this.grid[blackPos[0]][blackPos[1]] = blackCheck
      this.checkers.push(blackCheck)
    }
  }

  selectChecker(row, column) {
    return this.grid[row][column];
  }

  killChecker(position){
    let checker = this.selectChecker(position[0], position[1]);
    let spliceOutChecker = this.checkers.indexOf(checker);
    this.checkers.splice(spliceOutChecker, 1);
    this.grid[position[0]][position[1]] = null;
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

    let posRow = (splitEnd[0] - splitStart[0])/2;
    let posColumn = (splitEnd[1] - splitStart[1])/2;
    
    let killPosRow = splitEnd[0] - posRow;
    let killPosCol = splitEnd[1] - posColumn;

    //check if the distance of the start and end row is 2
    let absoluteRow = Math.abs(splitStart[0] - splitEnd[0]);

    if (absoluteRow === 2) {
      let killPosition = []
      killPosition.push(killPosRow, killPosCol);
      return this.board.killChecker(killPosition);
    }
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