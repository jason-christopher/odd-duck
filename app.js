'use strict'

// Global Variables

let rounds = 0;
let maxRounds = 25;
let allImgs = [];
let numOfImgs = 3;
let imageDiv = document.getElementById('imageDiv');
let button = document.getElementById('button');
let results = document.querySelector('ul');
let insertText = document.getElementById('insertText');

// Constructor Function

function Image(name, fileExt = '.jpeg') {
  this.name = name;
  this.fileExt = fileExt;
  this.src = `img/${this.name}${this.fileExt}`;
  this.votes = 0;
  this.views = 0;
  this.addToArray = function(){
    allImgs.push(this);
  }
  this.addToArray();
}

// Image Inputs

let bag = new Image('bag');
let banana = new Image('banana');
let bathroom = new Image('bathroom');
let boots = new Image('boots');
let breakfast = new Image('breakfast');
let bubblegum = new Image('bubblegum');
let chair = new Image('chair');
let cthulhu = new Image('cthulhu');
let dogDuck = new Image('dog-duck');
let dragon = new Image('dragon');
let pen = new Image('pen');
let petSweep = new Image('pet-sweep');
let scissors = new Image('scissors');
let shark = new Image('shark');
let sweep = new Image('sweep', '.png');
let tauntaun = new Image('tauntaun');
let unicorn = new Image('unicorn');
let waterCan = new Image('water-can');
let wineGlass = new Image('wine-glass');

// Render Function

function render(){
  let imgCounter = 0;
  let randomNumArray = new Array(numOfImgs);
  while(imgCounter < numOfImgs){
    let randomNum = Math.floor(Math.random() * allImgs.length);
    if(randomNumArray.indexOf(randomNum) === -1){
      randomNumArray.push(randomNum);
      imgCounter++;
      let image = document.createElement('img');
      image.id = 'imageShown';
      image.src = allImgs[randomNum].src;
      image.alt = allImgs[randomNum].name;
      imageDiv.appendChild(image);
      allImgs[randomNum].views++;
    }
  }
  if(rounds < maxRounds - 1) {
    insertText.innerText = `After ${maxRounds-rounds} more selections, you may use the button below to display the results.`;
  } else if ((maxRounds-rounds) === 1) {
    insertText.innerText = `After ${maxRounds-rounds} more selection, you may use the button below to display the results.`;
  } else {
    insertText.innerText = 'You may now use the button below to display the results.';
  }
}

render();

// Voting Event Listener

let handleClick = function(event){
  event.preventDefault();
  let winner = event.target.alt;
  if(winner === undefined){
    alert('Make sure to click on an image!');
  }
  for(let i = 0; i < allImgs.length; i++){
    if(winner === allImgs[i].name){
      allImgs[i].votes++;
      rounds++;
    }
  }
  for(let i=0; i < numOfImgs; i++){
    let image = document.getElementById('imageShown');
    image.remove();
  }
  render();
  if(rounds >= maxRounds){
    button.addEventListener('click', renderResults);
  }
  console.log(rounds);
}

imageDiv.addEventListener('click', handleClick);

// Results Event Listener

function renderResults() {
  let existingLI = document.querySelectorAll('li');
  for (let j = 0; j < existingLI.length; j++){
    existingLI[j].remove();
  }
  for(let i = 0; i < allImgs.length; i++){
    let li = document.createElement('li');
    li.innerText = `${allImgs[i].name}: ${allImgs[i].votes}/${allImgs[i].views}`;
    results.appendChild(li);
  }
}
