'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(hand1, hand2) {

  let hand1ag = hand1.toLowerCase().trim();
  let hand2ag = hand2.toLowerCase().trim();

  if (hand1ag === hand2ag) {
    return "It's a tie!";
  }
  if (hand1ag === 'rock' && hand2ag === 'scissors') {
    return "Hand one wins!";
  }
  if (hand1ag === 'scissors' && hand2ag === 'paper') {
    return "Hand one wins!";
  }
  if (hand1ag === 'paper' && hand2ag === 'rock') {
    return "Hand one wins!";
  }
  if (hand1ag === 'scissors' && hand2ag === 'rock') {
    return "Hand two wins!";
  }
  if (hand1ag === 'paper' && hand2ag === 'scissors') {
    return "Hand two wins!";
  }
  if (hand1ag === 'rock' && hand2ag === 'paper') {
    return "Hand two wins!";
  }
}

// let trim = getPrompt.trim();

function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}



// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  getPrompt();
  // trim();
}
