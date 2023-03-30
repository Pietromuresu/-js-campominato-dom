
const grid = document.getElementById('grid');
const gridContainer = document.querySelector('.container-grid');
const generate = document.querySelector('.button-genera');
const levels = document.getElementById('levels');
const bombs = [];
const NUM_BOMBS = 16;
const endGame = document.querySelector('.endGame');
const arrSquare = [];
const retry = document.querySelector(".retry")


let points = 0;
let levelValue = levels.value;


// generate buttton
generate.addEventListener('click', function(){
  
  generate.classList.add('hide');
  gridContainer.classList.remove('hide');
  levels.classList.add('hide');
  
  // generate squares
  for (let i = 1; i <= levels.value; i++){
  const newDiv = document.createElement("div");
  grid.appendChild(newDiv);
  arrSquare.push("newDiv.idElem ");
  newDiv.classList.add('square');
  newDiv.idElem = i ;
 

  newDiv.addEventListener('click', function(){
  newDiv.classList.add('clicked');

// generate bombs
 generate.addEventListener('click', generateBombs(levels.value, NUM_BOMBS));
  
  // win or lose
    if (bombs.includes(newDiv.idElem)){
      newDiv.classList.add('bomb');
      endGame.classList.add('showEnd');
      endGame.innerHTML = `<h1 class="lose"> HAI PERSO! HAI TOTALIZZATO ${points} PUNTI </h1>  `
    }else{
      points++;
    }
    if (points === (arrSquare.length - bombs.length)){
          endGame.classList.add('showEnd');
          endGame.innerHTML = `<h1 class="win" > HAI VINTO! HAI SCHIVATO TUTTE LE BOMBE!!! </h1>  `

        }
    })
    
    // reset button
    retry.addEventListener('click', function(){
      grid.removeChild(newDiv)
      gridContainer.classList.add('hide');
      generate.classList.remove('hide');
      levels.classList.remove('hide');
      endGame.classList.remove('showEnd')
      points = 0;
    })
    
  
// levels
  if (levels.value === '100'){
  newDiv.classList.add('levelOne');
  }else if (levels.value === '81'){
  newDiv.classList.add('levelTwo');
  }else {
  newDiv.classList.add('levelThree');
  }
  }
  

})





// functions
function generateBombs(max, min){
  for(let i = 0; bombs.length < min; i++){
    
    const bomb = Math.floor(Math.random() * (max - min + 1) + min);
    if (!bombs.includes(bomb)){
       bombs.push(bomb);
    }else {
      
    }

    
   
  }
  
  
}



