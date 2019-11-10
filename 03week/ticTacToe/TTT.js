

// find location of click and add x or o
// determine player1 or player2
// keep score
// find a winner via 3 in a row

// let ready = confirm("Are you ready for this?");


let previousGamePiece = null

function addGamePiece(selectedElement) {
  if (selectedElement.childElementCount === 0) {
    let newChildElement = document.createElement('h1')

    if (previousGamePiece === 'X') {
      //add text to element
      newChildElement.innerHTML = 'O'
      //set previousGamePiece
      previousGamePiece = 'O'
    } else {
      //add text to element
      newChildElement.innerHTML = 'X'
      //set previousGamePiece
      previousGamePiece = 'X'
    }

    selectedElement.appendChild(newChildElement);

    //check if winning ie same
    setTimeout(checkWinTopRow, 100);
    setTimeout(checkWinMidRow,100);
    setTimeout(checkWinLastRow,100);
    setTimeout(checkWinLeftCol,100);
    setTimeout(checkWinMidCol,100);
    setTimeout(checkWinRightCol,100);
    setTimeout(checkWinDiag1,100);
    setTimeout(checkWinDiag2,100);
    setTimeout(checkDraw, 100);
  }
}

function checkWinTopRow() {
  if (document.getElementById('box1').children[0].innerHTML === 'X' && document.getElementById('box12').children[0].innerHTML === 'X' && document.getElementById('box13').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box1').children[0].innerHTML === 'O' && document.getElementById('box12').children[0].innerHTML === 'O' && document.getElementById('box13').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinMidRow() {
  if (document.getElementById('box14').children[0].innerHTML === 'X' && document.getElementById('box15').children[0].innerHTML === 'X' && document.getElementById('box16').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box14').children[0].innerHTML === 'O' && document.getElementById('box15').children[0].innerHTML === 'O' && document.getElementById('box16').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinLastRow() {
  if (document.getElementById('box17').children[0].innerHTML === 'X' && document.getElementById('box18').children[0].innerHTML === 'X' && document.getElementById('box19').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box17').children[0].innerHTML === 'O' && document.getElementById('box18').children[0].innerHTML === 'O' && document.getElementById('box19').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinLeftCol() {
  if (document.getElementById('box1').children[0].innerHTML === 'X' && document.getElementById('box14').children[0].innerHTML === 'X' && document.getElementById('box17').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box1').children[0].innerHTML === 'O' && document.getElementById('box14').children[0].innerHTML === 'O' && document.getElementById('box17').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinMidCol() {
  if (document.getElementById('box12').children[0].innerHTML === 'X' && document.getElementById('box15').children[0].innerHTML === 'X' && document.getElementById('box18').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box12').children[0].innerHTML === 'O' && document.getElementById('box15').children[0].innerHTML === 'O' && document.getElementById('box18').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinRightCol() {
  if (document.getElementById('box13').children[0].innerHTML === 'X' && document.getElementById('box16').children[0].innerHTML === 'X' && document.getElementById('box19').children[0].innerHTML === 'X') {
    XWon();
  }

  if (document.getElementById('box13').children[0].innerHTML === 'O' && document.getElementById('box16').children[0].innerHTML === 'O' && document.getElementById('box19').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinDiag1() {
  if (document.getElementById('box1').children[0].innerHTML === 'X' && document.getElementById('box15').children[0].innerHTML === 'X' && document.getElementById('box19').children[0].innerHTML === 'X') {
    XWon();
}

if (document.getElementById('box1').children[0].innerHTML === 'O' && document.getElementById('box15').children[0].innerHTML === 'O' && document.getElementById('box19').children[0].innerHTML === 'O') {
    OWon();
  }
}

function checkWinDiag2() {
  if (document.getElementById('box13').children[0].innerHTML === 'X' && document.getElementById('box15').children[0].innerHTML === 'X' && document.getElementById('box17').children[0].innerHTML === 'X') {
    XWon();
}

if (document.getElementById('box13').children[0].innerHTML === 'O' && document.getElementById('box15').children[0].innerHTML === 'O' && document.getElementById('box17').children[0].innerHTML === 'O') {
    OWon();
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

function XWon() {
  alert('X Won');
  clearGameBoard();
  tallyX();
}

function OWon() {
  alert('O Won');
  clearGameBoard();
  tallyO();
}

function itDrew() {
  alert('Draw');
  clearGameBoard();
  tallyDraw();
}

function clearGameBoard() {
  function clearBox(boxId) {
    if (document.getElementById(boxId).firstChild) {
      document.getElementById(boxId).removeChild(document.getElementById(boxId).firstChild);
    }
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

function tallyX() {
  let scoreInnerHTML = document.getElementById('inputX').innerHTML
  let score = parseInt(scoreInnerHTML, 10)
  document.getElementById('inputX').innerHTML = score + 1
}

function tallyO() {
  let scoreInnerHTML2 = document.getElementById('inputO').innerHTML
  let score = parseInt(scoreInnerHTML2, 10)
  document.getElementById('inputO').innerHTML = score + 1
}

function tallyDraw() {
  let scoreInnerHTML3 = document.getElementById('inputDraw').innerHTML
  let score = parseInt(scoreInnerHTML3, 10)
  document.getElementById('inputDraw').innerHTML = score + 1
}