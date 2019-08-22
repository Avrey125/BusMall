'use strict';

var imageElement1 = document.querySelector('#image1');
var imageElement2 = document.querySelector('#image2');
var imageElement3 = document.querySelector('#image3');
var imageCaption1 = document.querySelector('#caption1');
var imageCaption2 = document.querySelector('#caption2');
var imageCaption3 = document.querySelector('#caption3');


var countButtonClicks = 1;

function ImageObj(name,url, timesShown) {
  this.name = name;
  this.src = url;
  this.timesShown = timesShown;
  ImageObj.list.push(this);
}

ImageObj.list = [];
// while (imageElement1 === imageElement2 || imageElement1 === imageElement3 || imageElement2 === imageElement3 || images.lastlastShown.includes(imageElement1));

function loadImages() {
  new ImageObj('("Robot") Bag','/images/bag.jpg', 0);
  new ImageObj('Bathroom Phone Holder','/images/bathroom.jpg', 0);
  new ImageObj('Breakfast Maker','/images/breakfast.jpg', 0);
  new ImageObj('Meatball Bubblegum','/images/bubblegum.jpg', 0);
  new ImageObj('Chair','/images/chair.jpg', 0);
  new ImageObj('Cthulhu','/images/cthulhu.jpg', 0);
  new ImageObj('Duck Mask','/images/dog-duck.jpg', 0);
  new ImageObj('Dragon','/images/dragon.jpg', 0);
  new ImageObj('U-Pensils','/images/pen.jpg', 0);
  new ImageObj('Pet Sweep','/images/pet-sweep.jpg', 0);
  new ImageObj('Pizza Scissors','/images/scissors.jpg', 0);
  new ImageObj('Shark Blanket','/images/shark.jpg', 0);
  new ImageObj('Baby Sweep','/images/sweep.png', 0);
  new ImageObj('TaunTaun Sleepingbag','/images/tauntaun.jpg', 0);
  new ImageObj('Unicorn Meat','/images/unicorn.jpg', 0);
  new ImageObj('USB','/images/usb.gif', 0);
  new ImageObj('Water Can','/images/water-can.jpg', 0);
  new ImageObj('Wine Glass','/images/wine-glass.jpg', 0);
  new ImageObj('boots', '/images/boots.jpg', 0); 
  new ImageObj('banana','/images/banana.jpg', 0);
}
    

    
loadImages();

imageElement1.src = ImageObj.list[1].src;
imageElement2.src = ImageObj.list[2].src;
imageElement3.src = ImageObj.list[3].src;
imageCaption1.textContent = ImageObj.list[1].name;
imageCaption2.textContent = ImageObj.list[2].name;
imageCaption3.textContent = ImageObj.list[3].name;

function showImage(element) {
  // load default images

  var randomNumber1 = Math.floor(Math.random() * ImageObj.list.length);
  var randomNumber2 = Math.floor(Math.random() * ImageObj.list.length);
  var randomNumber3 = Math.floor(Math.random() * ImageObj.list.length);
  //load images
  imageElement1.src = ImageObj.list[randomNumber1].src;
  imageCaption1.textContent = ImageObj.list[randomNumber1].name;
  imageElement2.src = ImageObj.list[randomNumber2].src;
  imageCaption2.textContent = ImageObj.list[randomNumber2].name;
  imageElement3.src = ImageObj.list[randomNumber3].src;
  imageCaption3.textContent = ImageObj.list[randomNumber3].name;

  //image 1
  if(element === imageElement1){
    ImageObj.list[randomNumber1].timesShown ++;
  }else if(element === imageElement2){
  //image 2
    ImageObj.list[randomNumber2].timesShown ++;
  }else{
  //image 3
    ImageObj.list[randomNumber3].timesShown ++;
  }

}


//event listeners
imageElement1.addEventListener('click', function(){
  if(countButtonClicks < 26) {
    countButtonClicks++;
    showImage(imageElement1);
  } else {
    makeChart(data, labels);
  }
  timesShownStorage();
});

imageElement2.addEventListener('click', function(){
  if(countButtonClicks === 0){
    ImageObj.list[2].timesShown ++;
  } else if(countButtonClicks < 26) {
    countButtonClicks++;
    showImage();
  } else {
    makeChart(data, labels);
  }
  timesShownStorage();
});

imageElement3.addEventListener('click', function() {
  if(countButtonClicks < 26) {
    countButtonClicks++;
    showImage();
  } else {
    makeChart(data, labels);
  }
  timesShownStorage();
});
console.log(countButtonClicks);

// var ctx = document.getElementById('chart').getContext('2d');
var labels = [];
var data = [];

// function saveData() {
//   var timesShown = [];
//   for (var i = 0; i < ImageObj.list.length; i++) {
//     timesShown.push(ImageObj.list[i].timesShown);
//   }
// }

// localStorage.setItem('timesShown')



function makeChart(data, labels) {
  for (var i = 0; i < ImageObj.list.length; i++) {
    labels.push(ImageObj.list[i].name);
    data.push(ImageObj.list[i].timesShown);
  }
  var ctx = document.getElementById('chart').getContext('2d');
  var chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '# of Clicks',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: data ,
      }]
    },
    // Configuration options go here
    options: {}
  });
}

function timesShownStorage() {
  for(var i = 0; i < ImageObj.list.length; i++) {

    localStorage.setItem(ImageObj.list[i].name, ImageObj.list[i].timesShown);


  }
}


