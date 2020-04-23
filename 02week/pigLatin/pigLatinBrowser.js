'use strict';

document.getElementById('button').onclick = getPrompt;

function getPrompt() {
  let input = document.getElementById('text-box').value
  document.getElementById('output').innerHTML = pigLatin(input)
  document.getElementById('text-box').value = '';
  return false
  };

function pigLatinEachWord(word) {  
  const wordSplit = word.split('')
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
  const firstLetter = wordSplit[0];

  if (vowels.includes(firstLetter)) {
    return word + 'yay';
  }

  let cutWord = '';
  let wordString = '';
  let cutWordString = '';

  for (let i = 1; i < wordSplit.length; i++) {
    if (vowels.includes(wordSplit[i])) {
      cutWord = wordSplit.splice(i)
      cutWordString = cutWord.join('')
      wordString = wordSplit.join('')
      
      return cutWordString + wordString + 'ay'
    }
  }
    return word + 'ay'
}

function pigLatin(input) {
  const standardizeInpt = input.toLowerCase().trim();
  const wordArray = standardizeInpt.split(' ')
  
  if (wordArray.length === 1){
    return pigLatinEachWord(standardizeInpt);
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