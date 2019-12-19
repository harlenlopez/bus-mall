'use strict';

console.log('js linked');

var photoContainer = document.getElementsByTagName('img');
var shownImages = [];


var left = document.getElementById('left');
var middle = document.getElementById('middle');
var right = document.getElementById('right');
var allImages = [];
var totalTimesClicked = 0;

function graphData(property) {
  var graph = [];
  for (var i = 0; i < allImages.length; i++) {
    graph.push(allImages[i][property]);
  }
  return graph;
}

function Product(name, imageURL, timesClicked, imageViewed) {
  this.name = name;
  this.imageURL = imageURL;

  if (timesClicked) {
    this.timesClicked = timesClicked;
  } else {
    this.timesClicked = 0;
  }

  if (imageViewed) {
    this.imageViewed = imageViewed;
  } else {
    this.imageViewed = 0;
  }

  allImages.push(this);

}
console.log('start');
var savedProductString = localStorage.getItem('savedProducts');
if (savedProductString) {
  var arrayOfNotProducts = JSON.parse(savedProductString);
  console.log(arrayOfNotProducts);
  for (var i = 0; i < arrayOfNotProducts.length; i++) {
    new Product(arrayOfNotProducts[i].name, arrayOfNotProducts[i].imageURL, arrayOfNotProducts[i].timesClicked, arrayOfNotProducts[i].imageViewed);
  }
  console.log(allImages);
} else {
  //mehtods:
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
}
console.log('conditions ran');


function votes() {
  if (totalTimesClicked === 25) {

    localStorage.setItem('savedProducts', JSON.stringify(allImages));

    var productList = document.getElementById('product-list');
    for (var i = 0; i < allImages.length; i++) {
      var newProductList = document.createElement('li');
      newProductList.textContent = `${allImages[i].name} had ${allImages[i].timesClicked} votes, and was shown ${allImages[i].imageViewed} times.`;
      productList.appendChild(newProductList);


      var ctx = document.getElementById('myChart').getContext('2d');
      // eslint-disable-next-line no-undef
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: graphData('name'),
          datasets: [
            {
              label: '# of Votes',
              data: graphData('timesClicked'),
              backgroundColor:
                'rgba(255, 99, 132, 0.2)',
              borderColor:
                'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: '# of viewed',
              data: graphData('imageViewed'),
              backgroundColor:
                'rgba(125, 99, 132, 0.2)',
              borderColor:
                'rgba(125, 99, 132, 1)',
              borderWidth: 1
            }
          ]

        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });


    }
    for (var j = 0; j < photoContainer.length; j++) {
      photoContainer[j].removeEventListener('click', imageClicked);
    }
  }
}

function imageClicked(event) {
  console.log('clicked on image');
  totalTimesClicked++;
  // shownImages++;
  displayImages();
  allImages[shownImages[0]].imageViewed++;
  allImages[shownImages[1]].imageViewed++;
  allImages[shownImages[2]].imageViewed++;

  if (event.srcElement.id === 'left') {
    allImages[shownImages[0]].timesClicked++;
  } else if (event.srcElement.id === 'middle') {
    allImages[shownImages[1]].timesClicked++;
  } else if (event.srcElement.id === 'right') {
    allImages[shownImages[2]].timesClicked++;
  }

}

console.log('things');

displayImages();

function getRandomIndex() {
  var randomIndex = Math.floor(Math.random() * allImages.length);
  return randomIndex;
}

function displayImages() {
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

  votes();
}
for (var j = 0; j < photoContainer.length; j++) {
  photoContainer[j].addEventListener('click', imageClicked);
}


// localStorage.setItem('userName', 'harlen');
// localStorage.getItem('userName');
// // myChart();

// var nextImgIndex1 = Math.floor(Math.random() * allImages.length);
// while ((nextImgIndex1 === left) || (nextImgIndex1 === middle) || (nextImgIndex3 === right)) {
//   nextImgIndex1 = Math.floor(Math.random() * allImages.length);
// }
// var nextImgIndex2 = Math.floor(Math.random() * allImages.length);
// while ((nextImgIndex2 === left) || (nextImgIndex2 === middle) || (nextImgIndex2 === nextImgIndex1)) {
//   nextImgIndex2 = Math.floor(Math.random() * allImages.length);
// }
// var nextImgIndex3 = Math.floor(Math.random() * allImages.length);
// while ((nextImgIndex3 === left) || (nextImgIndex3 === middle) || (nextImgIndex3 === nextImgIndex1 === nextImgIndex2)) {
//   nextImgIndex3 = Math.floor(Math.random() * allImages.length);
// }
// if (totalTimesClicked >= 25) {
//   var footerElement = document.getElementsByClassName('footer')[0];
//   footerElement.textContent = 'Thank you for assisting us in choosing a new product';
// }
