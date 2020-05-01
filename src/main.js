
const players = {
  playerOne: 'X',
  playerTwo: 'O'
};
const playerOneChoices = [];
const playerTwoChoices = [];
let currentPlayer = '';
let gameBoard = [];
const boxes = document.getElementsByClassName('box');
let counter = [];
let topNumber = 0;

for ( const box of boxes ) {
  box.onclick = runGame;
  gameBoard.push( box );
}

function runGame() {
  if ( !currentPlayer ) {
    currentPlayer = players.playerOne;
  }

  if( this.innerText == '' ) {
    this.innerText = currentPlayer;
  }

  let id = parseInt( this.id ) + 1;
  switchPlayer( id );
  counter.push( [1] );

  function removeClick() {
    for ( const box of boxes ) {
      if ( box.innerText !== '' ) {
        box.onClick = function() {
          return false;
        }
      }
    }
  }

  removeClick();

  winCombo();

  if ( topNumber === 0 ){
    checkIfLocked();
  }

}

function switchPlayer( id ){
  if ( currentPlayer === players.playerOne ){
    currentPlayer = players.playerTwo;
    playerOneChoices.push( id );
  } else {
    currentPlayer = players.playerOne;
    playerTwoChoices.push(id);
  }
}

let button = document.getElementById('button');
button.onclick = clearBoard;

function clearBoard() {
  for ( let board of gameBoard ) {
    console.log( 'board !!! ----> ', board );
    board.innerText = '';
    counter = [];
    window.location.reload();
  }
}

function winCombo() {
  if (boxes[0].innerText == 'X' && boxes[1].innerText == 'X' && boxes[2].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[3].innerText == 'X' && boxes[4].innerText == 'X' && boxes[5].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[6].innerText == 'X' && boxes[7].innerText == 'X' && boxes[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[0].innerText == 'X' && boxes[3].innerText == 'X' && boxes[6].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[1].innerText == 'X' && boxes[4].innerText == 'X' && boxes[7].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[2].innerText == 'X' && boxes[5].innerText == 'X' && boxes[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[0].innerText == 'X' && boxes[4].innerText == 'X' && boxes[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[2].innerText == 'X' && boxes[4].innerText == 'X' && boxes[6].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      boxes[0].innerText == 'O' && boxes[1].innerText == 'O' && boxes[2].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[3].innerText == 'O' && boxes[4].innerText == 'O' && boxes[5].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[6].innerText == 'O' && boxes[7].innerText == 'O' && boxes[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[0].innerText == 'O' && boxes[3].innerText == 'O' && boxes[6].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[1].innerText == 'O' && boxes[4].innerText == 'O' && boxes[7].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[2].innerText == 'O' && boxes[5].innerText == 'O' && boxes[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[0].innerText == 'O' && boxes[4].innerText == 'O' && boxes[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if (
      boxes[2].innerText == 'O' && boxes[4].innerText == 'O' && boxes[6].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();}}

  function checkIfLocked(){
    if (counter.length == 9) {
      msg.innerHTML = 'Game is Locked. <br> Try again';
    }
  }

  function clearClick() {
    for ( let box of boxes ) {
      if( box.innerText === '' ) {
        box.onclick = function() {
          return false;
        }
      }
    }
  }