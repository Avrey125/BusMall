'use strict';

var answr = 0;

function intro() {
  var name = prompt('Welcome to my page! Im Avrey, whats your name?');
  if(name === name){alert('Hi ' + name );}
}

function yesNoQuestions() {

  var color = prompt('Is Orange my favorite color? (y/n)').toLowerCase();
  if(color === 'y' || color === 'yes' ){alert('You\'re Correct!!!!'); answr++;}
  else{
    alert('Try again!');
  }

  var shoe = prompt('do i wear a size 11 (y/n)').toLowerCase();

  if( shoe === 'y' || shoe === 'yes'){alert(name + ',do you steal my shoes or something???'); answr++;}
  else{alert('Guess again!');}



  var bro = prompt('is my brothers name austin(y/n)?').toLowerCase();

  if(bro === 'y' || bro === 'yes'){alert(name + ', your gettin kinda creepy');answr++;}
  else{'I mean, how would you know right????';}


  var sis = prompt('is my sisters name victoria(y/n)?').toLowerCase();

  if(sis === 'y' || sis === 'yes'){alert(name + ', do you stalk her to???');answr++;}
  else{'good, at least you dont know that' + name;}

  var jess = prompt('is my aunts name jessica (y/n)?').toLowerCase();

  if(jess === 'y' || jess === 'yes'){alert(name + ', im calling the police!');answr++;}
  else{'howd you know the other stuff but not that?';}



  if (color === 'y' || color === 'yes'){
    console.log( name + 'knows my favorite color!');
  }else{console.log('isnt my favorite color kinda obvious...');}

  if( shoe === 'y' || shoe === 'yes'){console.log(name + 'knows my shoe size is 11!');}
  else{console.log( name + 'couldnt figure it out');}

  if( bro === 'y' || bro === 'yes'){console.log(name + 'knows my brothers name is austin');}
  else{console.log( name + 'struck out');}

  if( sis === 'y' || sis === 'yes'){console.log(name + 'knows my sisters name is victoria');}
  else{console.log( name + 'ultimatley failed');}

  if( jess === 'y' || jess === 'yes'){console.log(name + 'knows my aunts name is jessica');}
  else{console.log( name + 'is a really bad guesser');}
}

function question6() {
  for (var tries = 0; tries < 4; tries++) {
    var num = prompt('What number do I always pick between 1 and 10');
    if (num === '7') {
      alert('You\'re Correct'); answr++; break;
    }
    else{
      switch(num) {
      case '1':
        alert('too low');
        break;
      case '2':
        alert('too low');
        break;
      case '3':
        alert('too low');
        break;
      case ('4') :
        alert('too low');
        break;
      case ('5') :
        alert('too low');
        break;
      case ('6') :
        alert('too low');
        break;

      case ('8') :
        alert('Too High');
        break;
      case ('9') :
        alert('Too High');
        break;
      case ('10') :
        alert('Too High');
        break;
      default:
        alert('Thats Not Even A Coice!');
        break;

      }
    }
  }
}

function question7() {

  var pet = ['Buddy','Peaches','Buddah','Junior'];
  var i = 0;

  for( i = 0; i < 6 ; i++){

    var pro = prompt('What is one of my pets name?');

    if( pet.includes(pro)){
      answr++;
      alert('Correct! The correct answers are Peaches, Buddy, Junior, and Buddah, you got ' + answr + ' out of 7 correct');
      pet.remove(pro);

    }
    else {alert('Try Again!');
    }
  }

  alert('The correct answers are Peaches, Buddy, Junior, or Buddah, you got ' + answr + 'out of 7 correct');
}

intro();
yesNoQuestions();
question6();
question7();


