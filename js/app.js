'use strict'

let rounds = 1;
let maxRounds = 15;
let allImgs = [];

function Image(name, fileExt = '.jpeg') {
  this.name = name;
  this.fileExt = fileExt;
  this.src = `img/${this.name}${this.fileExt}`;
  this.alt = this.name;
  this.votes = 0;
  this.views = 0;
  this.addToArray = function(){
    allImgs.push(this);
  }
  this.addToArray();
}

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


// image1.src = allImgs[img1].src;

// let myContainer = document.querySelector('section');

// function handleClick(event){
//   let variable = event.target.name.value;
// }

// myContainer.addEventListener('click', handleClick);

// // When rounds = maxRounds
// myContainer.removeEventListener('click', handleClick);

// let button = documet.querySelector('section');
// button.addEventListener('click', renderResults);

// let results = document.querySelector('ul');
// function renderResults() {
//   for(let i = 0; i < allImgs.length; i++){
//     let li = document.createElement('li');
//     li.innerText = `${allImgs[i]} had ${allImgs[i].votes} with ${allImgs[i].views}`;
//     results.appendChild(li);
//   }
// }

// renderGoats();
