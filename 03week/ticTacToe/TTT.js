
let previousGamePiece = null

function addGamePiece(selectedElement) {
  
  if (selectedElement.children[0].innerHTML === ' ') {

    if (previousGamePiece === 'X') {
      //add text to element
      selectedElement.children[0].innerHTML = 'O'
      //set previousGamePiece
      previousGamePiece = 'O'
    } else {
      //add text to element
      selectedElement.children[0].innerHTML = 'X'
      //set previousGamePiece
      previousGamePiece = 'X'
    }

    //check if winning 
    setTimeout(() => {
      //checks each row
      checkWin('box1', 'box12', 'box13');
      checkWin('box14', 'box15', 'box16');
      checkWin('box17', 'box18', 'box19');
      //checks each column
      checkWin('box1', 'box14', 'box17');
      checkWin('box12', 'box15', 'box18');
      checkWin('box13', 'box16', 'box19');
      //checks both diag
      checkWin('box1', 'box15', 'box19');
      checkWin('box13', 'box15', 'box17');
      //check draw
      checkDraw();
    }, 100);
  }
}

function checkWin(firstBox, secondBox, thirdBox) {

  if (document.getElementById(firstBox).children[0].innerHTML === 'X' && document.getElementById(secondBox).children[0].innerHTML === 'X' && document.getElementById(thirdBox).children[0].innerHTML === 'X') {
    winnerIs('X');
  }

  if (document.getElementById(firstBox).children[0].innerHTML === 'O' && document.getElementById(secondBox).children[0].innerHTML === 'O' && document.getElementById(thirdBox).children[0].innerHTML === 'O') {
    winnerIs('O');
  } 
}

function checkDraw() {
  var i;
  var draw = true; 
  for (i = 0; i < 9; i++) {
     if (document.getElementsByClassName('box')[i].lastElementChild.innerHTML !== 'X' && document.getElementsByClassName('box')[i].lastElementChild.innerHTML !== 'O') {
       draw = false
     }
  }
  if (draw) {
    itDrew()
  }
}

function winnerIs(symb) {
  alert(`${symb} Won`);
  clearGameBoard();
  tally(symb);
}

function itDrew() {
  alert('Draw');
  clearGameBoard();
  tallyDraw();
}

function clearGameBoard() {
  function clearBox(boxId) {
    
    document.getElementById(boxId).children[0].innerHTML = ' ';
  }
  
  clearBox('box1');
  clearBox('box12');
  clearBox('box13');
  clearBox('box14');
  clearBox('box15');
  clearBox('box16');
  clearBox('box17');
  clearBox('box18');
  clearBox('box19');
}

function tally(symb) {
  let scoreInnerHTML = document.getElementById(`input${symb}`).innerHTML
  let score = parseInt(scoreInnerHTML, 10)
  document.getElementById(`input${symb}`).innerHTML = score + 1
}

function tallyDraw() {
  let scoreInnerHTML3 = document.getElementById('inputDraw').innerHTML
  let score = parseInt(scoreInnerHTML3, 10)
  document.getElementById('inputDraw').innerHTML = score + 1
}