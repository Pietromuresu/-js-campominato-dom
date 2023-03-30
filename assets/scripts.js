
const grid = document.getElementById('grid');
const gridContainer = document.querySelector('.container-grid ')
const generate = document.querySelector('.button-genera');
const levels = document.getElementById('levels');


generate.addEventListener('click', function(){
  generate.classList.add('hide');
  gridContainer.classList.remove('hide');
  levels.classList.add('hide');
  
  for (let i = 1; i <= levels.value; i++){
  const newDiv = document.createElement("div");
  grid.appendChild(newDiv);
  newDiv.classList.add('square');
  newDiv.idElem = i ;
  newDiv.addEventListener('click', function(){
    newDiv.classList.add('clicked');
    
    console.log(newDiv.idElem);
    })

  if (levels.value === '100'){
  newDiv.classList.add('levelOne');
  }else if (levels.value === '81'){
  newDiv.classList.add('levelTwo');
  }else {
  newDiv.classList.add('levelThree');
  }
  }
  
})



