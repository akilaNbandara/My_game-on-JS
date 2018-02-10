var isaac = null;

function init() {
  isaac = document.getElementById('isaac');
  isaac.style.position = 'absolute';
  isaac.style.left = 50 + 'vw';
  isaac.style.top = '125px';
    window.addEventListener('keydown', moveSelection);
    window.addEventListener('keyup', noMoment);
}

var finish = document.getElementById('finish');

function moveRight(){
  if (isaac.style.left != 95 + "vw") {
    isaac.style.left = parseInt(isaac.style.left) + 5 + 'vw';               //checked
  }
}

function moveLeft(){
  if (isaac.style.left != 0 + "vw"){
    isaac.style.left = parseInt(isaac.style.left) - 5 + 'vw';                // checked
  }
}

function moveUp(){

  if (isaac.style.top != 125 + "px") {
      $('#isaac').attr("src","images/cross.gif");
    isaac.style.top = parseInt(isaac.style.top) - 40 + 'px';                //chw

  }
}
function moveDown(){

    if (isaac.style.top!=700+"px") {
        $('#isaac').attr("src","images/cross.gif");
        isaac.style.top = parseInt(isaac.style.top) + 40 + 'px';

    }
}

function wait() {
    $('#isaac').attr("src","images/wait.gif");
}

function noMoment(event) {
    switch (event.keyCode) {
        case 37:
                                                      //checked
        case 39:

        case 38:

        case 40:

        default: wait();
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
      default: wait();
      }

}
function hitMessage() {
    alert('Oops! You\'ve been hit by a car!')
    window.scrollTo(0,0);
    window.location.reload();
}
var collision = setInterval(collisionDetect, 50);

function collisionDetect() {
    var car = document.getElementsByClassName("car");
    var isaac = document.getElementById('isaac');
    for (var i = 0; i < 4; i++) {


        if (isaac.offsetLeft < car[i].offsetLeft + car[i].offsetWidth &&
            isaac.offsetLeft + isaac.offsetWidth > car[i].offsetLeft &&
            isaac.offsetTop < car[i].offsetTop + car[i].offsetHeight &&
            isaac.offsetHeight + isaac.offsetTop > car[i].offsetTop) {

            $('#isaac').attr("src","images/hit.gif");

            $('#isaac').css("height","200px");
            $('#isaac').css("width","200px");


            setTimeout(hitMessage, 1000);


        }

    }
}
//}

window.onload = init;

