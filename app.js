'use strict';

console.log('js linked');

var photoContainer = document.getElementById('photo-container');

var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');

var allImages = [];

function Product(name, imageURL) {
  this.name = name;
  this.imageURL = imageURL;
  this.totalTimesClicked = 0;
  this.imageViewed = 0;
  allImages.push(this);

}
console.log('function');

new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('chair', 'img/chair.jpg');
new Product('ctchulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('tauntaun', 'img/tauntaun.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

var totalTimesClicked = 0;
function imageClicked(event) {
  console.log('clicked on image');
  totalTimesClicked++;
  displayImages();

  if (totalTimesClicked >= 25) {
    var footerElement = document.getElementsByClassName('footer')[0];
    footerElement.textContent = 'Thank you for assisting us in choosing a new product';
  }


}

console.log('things');

displayImages();

function getRandomIndex() {
  var randomIndex = Math.floor(Math.random() * allImages.length);
  return randomIndex;
}



function displayImages() {
  var shownImages = [];
  shownImages[0] = getRandomIndex();
  shownImages[1] = getRandomIndex();
  while (shownImages[0] === shownImages[1]) {
    shownImages[1] = getRandomIndex();
  }
  shownImages[2] = getRandomIndex();
  while (shownImages[2] === shownImages[0] || shownImages[2] === shownImages[1]) {
    shownImages[2] = getRandomIndex();
  }

  left.src = allImages[shownImages[0]].imageURL;
  middle.src = allImages[shownImages[1]].imageURL;
  right.src = allImages[shownImages[2]].imageURL;
}


photoContainer.addEventListener('click', imageClicked);















//day 2 new stuff to add
//
//
//adding onto existing base code
//using chart.js
//pulling in external code into exesting code
//gonna use a cdn to pull in our files, its a contant delivery;
