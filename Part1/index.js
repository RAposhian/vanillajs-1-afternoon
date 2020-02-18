const board = [];

const play = (clickedId) => {
   const playerSpan = document.getElementById('player');
   const elementClicked = document.getElementById(clickedId);
   
   if (playerSpan.innerText === 'X') {
      playerSpan.innerText = 'O';
      elementClicked.innerText = 'X'; 
      board[clickedId] = 'X'
   } else { 
      playerSpan.innerText = 'X';
      elementClicked.innerText = 'O';
      board[clickedId] = 'O'
   }
   
   let topRight = board[2];
   let topMiddle = board[1];
   let topLeft = board[0];
   let centerRight = board[5];
   let centerMiddle = board[4];
   let centerLeft = board[3];
   let bottomRight = board[8];
   let bottomMiddle = board[7];
   let bottomLeft = board[6];
   
   if (topRight !== undefined && topMiddle !== undefined && topLeft !== undefined)
   // first instance of a winner horizontal
   {
      if (topRight === "X" && topMiddle === "X" && topLeft === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topRight === "O" && topMiddle === "O" && topLeft === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   }
    if (centerRight !== undefined && centerMiddle !== undefined && centerLeft !== undefined) 
   //second instance of a winner horizontal
   {
      if (centerRight === "X" && centerMiddle === "X" && centerLeft === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (centerRight === "O" && centerMiddle === "O" && centerLeft === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   }
    if (bottomRight !== undefined && bottomMiddle !== undefined && bottomLeft !== undefined)
   //third instance of a winner horizontal
   {
      if (bottomRight === "X" && bottomMiddle === "X" && bottomLeft === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (bottomRight === "O" && bottomMiddle === "O" && bottomLeft === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   } 
    if (topLeft !== undefined && centerLeft !== undefined && bottomLeft !== undefined) 
   // fourth instance of a winner vertical
   {
      if (topLeft === "X" && centerLeft === "X" && bottomLeft === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topLeft === "O" && centerLeft === "O" && bottomLeft === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   } 
    if (topMiddle !== undefined && centerMiddle !== undefined && bottomMiddle !== undefined) 
   //fifth instance of a winner vertical
   {
      if (topMiddle === "X" && centerMiddle === "X" && bottomMiddle === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topMiddle === "O" && centerMiddle === "O" && bottomMiddle === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   } 
    if (topRight !== undefined && centerRight !== undefined && bottomRight !== undefined) 
   //sixth instance of a winner vertical
   {
      if (topRight === "X" && centerRight === "X" && bottomRight === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topRight === "O" && centerRight === "O" && bottomRight === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   }
    if (topLeft !== undefined && centerMiddle !== undefined && bottomRight !== undefined) 
   //seventh instance of a winner diagonal
   {
      if (topLeft === "X" && centerMiddle === "X" && bottomRight === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topLeft === "O" && centerMiddle === "O" && bottomRight === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   }
    if (topRight !== undefined && centerMiddle !== undefined && bottomLeft !== undefined) 
   //eighth instance of a winner diagonal
   {
      if (topRight === "X" && centerMiddle === "X" && bottomLeft === "X" ) {
         alert('X Player is the Winner!')
         return;
      } else if (topRight === "O" && centerMiddle === "O" && bottomLeft === "O" ){
         alert('O Player is the Winner!')
         return;
      }
   } 
   // determines if board is full
   let boardFull = true;
   for (let i = 0; i < 9; i++) {
      if (board[i] === undefined) {
         boardFull = false
      } 
   }
   //reports if it is cats game
   if (boardFull === true) {
      alert("It's a cat's game!");
      return;
   }
   
}