'use strict';

console.log('js linked');

var imageDownloads = document.getElementsByTagName('img');
var imgIndex1 = 0;
var imgIndex2 = 1;
var imgIndex3 = 2;
var imgIndex4 = 3;
// var imgIndex5 = 4;
// var imgIndex6 = 5;
// var imgIndex7 = 6;
// var imgIndex8 = 7;
// var imgIndex9 = 8;
// var imgIndex10 = 9;
// var imgIndex11= 10;
// var imgIndex12= 11;
// var imgIndex13= 12;
// var imgIndex14= 13;
// var imgIndex15= 14;
// var imgIndex16= 15;
// var imgIndex17= 16;
// var imgIndex18= 17;

var allImages = [];

function image(name, imageURL){
  this.name = name;
  this.imageURL = imageURL;
  this.timesClicked = 0;
  allImages.push(this);

}

new image('bag', 'img/bag.jpg');
new image('banana', 'img/banana.jpg');
new image('bathroom', 'img/bathroom.jpg');
new image('boots', 'img/boots.jpg');
new image('breakfast', 'img/breakfast.jpg');
new image('chair', 'img/chair.jpg');
new image('ctchulhu', 'img/cthulhu.jpg');
new image('dog-duck', 'img/dog-duck.jpg');
new image('dragon', 'img/dragon.jpg');
new image('pen', 'img/pen.jpg');
new image('pet-sweep', 'img/pet-sweep.jpg');
new image('scissors', 'img/scissors.jpg');
new image('shark', 'img/shark.jpg');
new image('sweep', 'img/sweep.png');
new image('tauntaun', 'img/tauntaun.jpg');
new image('usb', 'img/usb.gif');
new image('water-can', 'img/water-can.jpg');
new image('wine-glass', 'img/wine-glass.jpg');

var totalTimesClicked = 0;
function imageClicked(event){
  console.log('clicked on image');
  totalTimesClicked++;
  if(event.srcElement.id === '1') {
allImages[imgIndex1].totalTimesClicked++;
  } else if (event.srcElement.id === '2') {
    allImages[imgIndex2].totalTimesClicked++;
  } else if (event.srcElement.id === '3') {
    allImages[imgIndex3].totalTimesClicked++;
  }
} 

var nextImgIndex1 = Math.floor(Math.random() * allImages.length);
while ((nextImgIndex2 ===imgIndex1) || (nextImgIndex1 === imgIndex2)){
  nextImgIndex1 = Math.floor(Math.random() * allImages.length);
}
var nextImgIndex2 = Math.floor(Math.random() * allImages.length);
while((nextImgIndex2 === imgIndex1) || (nextImgIndex2 === imgIndex2) || (nextImgIndex2 === nextImgIndex1===)) {
  nextImgIndex2 = Math.floor(Math.random() * allImages.length);
}
var nextImgIndex3 = Math.floor(Math.random() * allImages.length);
while((nextImgIndex3 === imgIndex1) || (nextImgIndex3 === imgIndex2) || (nextImgIndex3 === nextImgIndex1 === nextImgIndex2)) {
  nextImgIndex3 = Math.floor(Math.random() * allImages.length);
}
imgIndex1 = nextImgIndex1;
imgIndex2 = nextImgIndex2;
imgIndex3 = nextImgIndex3;

imageDownloads[0].src = allImages[imgIndex1].imageURL;
imageDownloads[1].src = allImages[imgIndex2].imageURL;
imageDownloads[2].src = allImages[imgIndex3].imageURL;

if(totalClicks >=25){
  var footerElement = document.getElementsByClassName('footer')[0];
  footerElement.textContent = `Thank you for assisting us in choosing a new product`;
}
}
for (var i = 0; i<imageDownloads.length; i++) {
  imageDownloads[i].addEventListener('click', imageClicked);
}

















function images(){

}
