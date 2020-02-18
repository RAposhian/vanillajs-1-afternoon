let inputId = document.getElementById('Input');
let inputColor = document.getElementById('Color');

// console.log(inputColor, inputId);

function setCard() {
   let card = document.getElementById(inputId.value);
      card.style.color = inputColor.value;
   // console.log(card);
}  

function reset() {
   location.reload();
}