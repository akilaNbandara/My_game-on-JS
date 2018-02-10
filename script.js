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
    isaac.style.left = parseInt(isaac.style.left) + 5 + 'vw';
  }
}

function moveLeft(){
  if (isaac.style.left != 0 + "vw"){
    isaac.style.left = parseInt(isaac.style.left) - 5 + 'vw';
  }
}

function moveUp(){

  if (isaac.style.top != 125 + "px") {
      $('#isaac').attr("src","images/cross.gif");
    isaac.style.top = parseInt(isaac.style.top) - 40 + 'px';

  }
}
function moveDown(){

    if (isaac.style.top!=805+"px") {
        $('#isaac').attr("src","images/cross.gif");
        isaac.style.top = parseInt(isaac.style.top) + 40 + 'px';

    }
}

function wait() {
    $('#isaac').attr("src","images/wait.gif");
}

function moveSelection(evt) {
  switch (evt.keyCode) {
      case 37:
      moveLeft();
      break;
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
//     alert('Oops! You\'ve been hit by a car!')
//     window.scrollTo(0,0);
//     window.location.reload();
    if(alert('Alert For your User!')){}
    else{
      window.location.reload();
      window.scrollTo(0,0);
    }
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

            $('#isaac').stop();
            setTimeout(hitMessage, 250);


        }

    }
}
var win = setInterval(Finished, 100);

function winMessage() {
    alert("You Win! Congrats!!!!!!!");
    window.scrollTo(0, 0);

    window.location.reload();
    }
function Finished() {
    if (isaac.offsetTop > finish.offsetTop) {

        $('#isaac').attr("src","images/wait.gif");
        $('#isaac').stop();
        setTimeout(moveSelection,5)
        setTimeout(winMessage, 50);
    }
}
window.onload = init;

