const board = [];
let boardFull = true;
let topRight = board[3];
let topMiddle = board[2];
let topLeft = board[1];
let centerRight = board[6];
let centerMiddle = board[5];
let centerLeft = board[4];
let bottomRight = board[9];
let bottomMiddle = board[8];
let bottomLeft = board[7];

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
   if (topRight !== undefined && topMiddle !== undefined && topLeft !== undefined)
   // first instance of a winner horizontal
   {

   } else if (centerRight !== undefined && centerMiddle !== undefined && centerLeft !== undefined) 
   //second instance of a winner horizontal
   {

   } else if (bottomRight !== undefined && bottomMiddle !== undefined && bottomLeft !== undefined)
   //third instance of a winner horizontal
   {

   } else if (topLeft !== undefined && centerLeft !== undefined && bottomLeft !== undefined) 
   // fourth instance of a winner vertical
   {

   } else if (topMiddle !== undefined && centerMiddle !== undefined && bottomMiddle !== undefined) 
   //fifth instance of a winner vertical
   {

   } else if (topRight !== undefined && centerRight !== undefined && bottomRight !== undefined) 
   //sixth instance of a winner vertical
   {

   } else if (topLeft !== undefined && centerMiddle !== undefined && bottomRight !== undefined) 
   //seventh instance of a winner diagonal
   {

   } else if (topRight !== undefined && centerMiddle !== undefined && bottomLeft !== undefined) 
   //eighth instance of a winner diagonal
   {
      
   }
   

   
}