'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pigLatinEachWord(word) {  

  const wordSplit = word.split('')

  //define vowel and first letter
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const firstLetter = wordSplit[0];

  //check first letter is not a vowel
  if (vowels.includes(firstLetter)) {
    return word + 'yay';
  }

    let cutWord = '';
    let wordString = '';
    let cutWordString = '';

  for (let i = 0; i < wordSplit.length; i++) {
    if (i > 0 && vowels.includes(wordSplit[i])) {
      cutWord = wordSplit.splice(i)
      wordString = wordSplit.join('')
      cutWordString = cutWord.join('')
      return cutWordString + wordString + 'ay'
      }
    }
    return word + 'ay'
}

function pigLatin(word) {
  word = word.toLowerCase().trim();
  const wordArray = word.split(' ')
  
  if (wordArray.length === 1){
    return pigLatinEachWord(word);
  } 
  else {
    let pigLatinWordsArray = wordArray.map((word) => {
      return pigLatinEachWord(word)
    })
    let wordsString = '';
    wordsString = pigLatinWordsArray.join(' ')
    return wordsString
  }
}

function getPrompt() {
  let input = document.getElementsByClassName('text-box')[0].value
  pigLatin(input);
  console.log(input);
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it('should separate two words and return them together', () => {
      assert.equal(pigLatin('Hop Fest'), 'ophay estfay');
    });
  });
} else {

  getPrompt();

}
