
var players = {playerOne: 'X', playerTwo: 'O'};
var playerOneChoices = [];
var playerTwoChoices = [];
var currentPlayer = '';
var gameBoard = [];
var box = document.getElementsByClassName('box');
var counter = [];
var topNumber = 0;

for (i = 0; i < box.length; i++) {
    var active = box[i];
    active.onclick = runGame;
    gameBoard.push(active);
  } 

function runGame() {
  if (currentPlayer) {
  } else {
    currentPlayer = players.playerOne;
  }
  
  if(this.innerText == '' ) { 
    this.innerText = currentPlayer;
  }

  var id = parseInt(this.id) + 1;
  console.log(id)
  switchPlayer(id);
  counter.push([1]);

  function removeClick() {
  for (i = 0; i < box.length; i++) {
      var active = box[i];
      console.log(active.innerText)
      if (active.innerText != '') {
        console.log('filled');
        active.onclick = function(){
          return false;}
      }
    }
  }
  removeClick()
  winCombo();
  if (topNumber == 0){
  checkIfLocked();}}

function switchPlayer(id){
  if (currentPlayer == players.playerOne){
    currentPlayer = players.playerTwo;
    playerOneChoices.push(id);
  } 
  else {currentPlayer = players.playerOne;
    playerTwoChoices.push(id);
  }}; 

var button = document.getElementById('button');
button.onclick = clearBoard;

function clearBoard() {
    for (i = 0; i < gameBoard.length; i++)  {
      gameBoard[i].innerText = '';
      console.log(gameBoard[i]);
      counter = [];
      window.location.reload()
    }}

function winCombo() {
  if (box[0].innerText == 'X' && box[1].innerText == 'X' && box[2].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[3].innerText == 'X' && box[4].innerText == 'X' && box[5].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[6].innerText == 'X' && box[7].innerText == 'X' && box[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[0].innerText == 'X' && box[3].innerText == 'X' && box[6].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[1].innerText == 'X' && box[4].innerText == 'X' && box[7].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[2].innerText == 'X' && box[5].innerText == 'X' && box[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[0].innerText == 'X' && box[4].innerText == 'X' && box[8].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if ( 
      box[2].innerText == 'X' && box[4].innerText == 'X' && box[6].innerText == 'X'){
      msg.innerText = 'X WIN!'; topNumber++; clearClick();
    } else if (
      box[0].innerText == 'O' && box[1].innerText == 'O' && box[2].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[3].innerText == 'O' && box[4].innerText == 'O' && box[5].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[6].innerText == 'O' && box[7].innerText == 'O' && box[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[0].innerText == 'O' && box[3].innerText == 'O' && box[6].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[1].innerText == 'O' && box[4].innerText == 'O' && box[7].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[2].innerText == 'O' && box[5].innerText == 'O' && box[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[0].innerText == 'O' && box[4].innerText == 'O' && box[8].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();
    } else if ( 
      box[2].innerText == 'O' && box[4].innerText == 'O' && box[6].innerText == 'O'){
      msg.innerText = 'O WIN!'; topNumber++; clearClick();}}

  function checkIfLocked(){
    if (counter.length == 9) {
      msg.innerHTML = 'Game is Locked. <br> Try again';
    }
  }

  function clearClick() {
  for (i = 0; i < box.length; i++) {
      var active = box[i];
      if (active.innerText == '') {
        console.log('empty');
        active.onclick = function(){
          return false;}
      }}}