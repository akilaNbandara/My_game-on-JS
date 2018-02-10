var isaac = null;

function init() {
  isaac = document.getElementById('isaac');
  isaac.style.position = 'absolute';
  isaac.style.left = 50 + 'vw';
  isaac.style.top = '125px';
  window.addEventListener('keydown', moveSelection);
}

var finish = document.getElementById('finish');

function moveRight(){
  if (isaac.style.left != 95 + "vw") {
    isaac.style.left = parseInt(isaac.style.left) + 5 + 'vw';               //checked
  }
}

function moveLeft(){
  if (isaac.style.left != 0 + "vw"){
    isaac.style.left = parseInt(isaac.style.left) - 5+ 'vw';                // checked
  }
}

function moveUp(){

  if (isaac.style.top != 125 + "px") {

    isaac.style.top = parseInt(isaac.style.top) - 10 + 'px';                //chw

  }
}
function moveDown(){
    if (isaac.style.top!=705+"px") {
        isaac.style.top = parseInt(isaac.style.top) + 10 + 'px';

    }
}

function moveSelection(evt) {
  switch (evt.keyCode) {
      case 37:
      moveLeft();
      break;                                            //checked
      case 39:
      moveRight();
      break;
      case 38:
      moveUp();
      break;
      case 40:
      moveDown();
      break;
      }
  }
var collision = setInterval(collisionDetect, 50);

function collisionDetect() {
   var car = document.getElementsByClassName("car");

     for (var i in cars) {
    //    console.log(car_key);}
        // car = cars[car_key];
    // console.log(car[0].offsetLeft);
        // if (isaac.offsetLeft < car.offsetLeft + car.offsetWidth &&
        //     isaac.offsetLeft + isaac.offsetWidth > car.offsetLeft &&
        //     isaac.offsetTop < car.offsetTop + car.offsetHeight &&
        //     isaac.offsetHeight + isaac.offsetTop > car.offsetTop) {
        //     alert('Oops! You\'ve been hit by a car!');
        //
        // }

}




window.onload = init;
