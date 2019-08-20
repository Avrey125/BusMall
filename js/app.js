'use strict'

var imageElement1 = document.querySelector('#image1');
var imageElement2 = document.querySelector('#image2');
var imageElement3 = document.querySelector('#image3');
var imageCaption1 = document.querySelector('#caption1');
var imageCaption2 = document.querySelector('#caption2');
var imageCaption3 = document.querySelector('#caption3');


var countButtonClicks = 1;

function Image(name,url, timesShown) {
    this.name = name;
    this.src = url;
    this.timesShown = timesShown;
    Image.list.push(this);
}

Image.list = [];
// while (imageElement1 === imageElement2 || imageElement1 === imageElement3 || imageElement2 === imageElement3 || images.lastlastShown.includes(imageElement1));

function loadImages() {
        new Image('("Robot") Bag','/images/bag.jpg', 0);
        new Image('Bathroom Phone Holder','/images/bathroom.jpg', 0);
        new Image('Breakfast Maker','/images/breakfast.jpg', 0);
        new Image('Meatball Bubblegum','/images/bubblegum.jpg', 0);
        new Image('Chair','/images/chair.jpg', 0);
        new Image('Cthulhu','/images/cthulhu.jpg', 0);
        new Image('Duck Mask','/images/dog-duck.jpg', 0);
        new Image('Dragon','/images/dragon.jpg', 0);
        new Image('U-Pensils','/images/pen.jpg', 0);
        new Image('Pet Sweep','/images/pet-sweep.jpg', 0);
        new Image('Pizza Scissors','/images/scissors.jpg', 0);
        new Image('Shark Blanket','/images/shark.jpg', 0);
        new Image('Baby Sweep','/images/sweep.png', 0);
        new Image('TaunTaun Sleepingbag','/images/tauntaun.jpg', 0);
        new Image('Unicorn Meat','/images/unicorn.jpg', 0);
        new Image('USB','/images/usb.gif', 0);
        new Image('Water Can','/images/water-can.jpg', 0);
        new Image('Wine Glass','/images/wine-glass.jpg', 0);
        new Image('boots', '/images/boots.jpg', 0);
        new Image('banana','/images/banana.jpg', 0);
};



loadImages();

function showImage() {
    var randomNumber1 = Math.floor(Math.random() * Image.list.length); 

    var randomNumber2 = Math.floor(Math.random() * Image.list.length); 

    var randomNumber3 = Math.floor(Math.random() * Image.list.length); 

    //image 1
    imageElement1.src = Image.list[randomNumber1].src;
    Image.list[randomNumber1].timesShown ++;
    caption1.textContent = Image.list[randomNumber1].name;

    //image 2
    imageElement2.src = Image.list[randomNumber2].src;
    Image.list[randomNumber2].timesShown ++;
    caption2.textContent = Image.list[randomNumber2].name; 
    
    //image 3
    imageElement3.src = Image.list[randomNumber3].src;
    Image.list[randomNumber3].timesShown ++;
    caption3.textContent = Image.list[randomNumber3].name;
    
}
imageElement1.src = Image.list[1].src;
imageElement2.src = Image.list[2].src;
imageElement3.src = Image.list[3].src;
caption1.textContent = Image.list[1].name;
caption2.textContent = Image.list[2].name;    
caption3.textContent = Image.list[3].name;



imageElement1.addEventListener('click', function(){
    if(countButtonClicks < 26) {
    countButtonClicks++;
    showImage();
    }  else {
        alertEndOfGame();
    }
});

imageElement2.addEventListener('click', function(){
    if(countButtonClicks < 26) {
    countButtonClicks++; 
    showImage(); 
    }
});

imageElement3.addEventListener('click', function() {
    if(countButtonClicks < 26) {
    countButtonClicks++;
    showImage(); 
    } 
});
console.log(countButtonClicks)

function alertEndOfGame() {
    let alertString = '';
    for(var i=0; i<Image.list.length; i++){
       alertString = alertString + `Nice! ${Image.list[i].name}: ${Image.list[i].timesShown} \n`;
    }
    alert(alertString);
}

