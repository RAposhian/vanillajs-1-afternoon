const board = [];
let topRight;
let topMiddle;
let topLeft;
let centerRight;
let centerMiddle;
let centerLeft;
let bottomRight;
let bottomMiddle;
let bottomLeft;

const play = (clickedId) => {
   const playerSpan = document.getElementById('player');
   elementClicked = document.getElementById(clickedId);

   if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      elementClicked.innerText = 'X'; 
      board[clickedId] = 'X'
   } else { 
      playerSpan.innerText = 'X';
      elementClicked.innerText = 'O';
      board[clickedId] = 'O'
   }
   // console.log(board)
}