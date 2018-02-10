<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="viewport" content="width=device-width,initial-scale=1.0" charset="UTF-8" >
    <title>Game</title>
    <style>
        body {
            background-image: url("images/sky.gif");
            margin:0;
            overflow-x: hidden;

        }


        #isaac {
            height: 100px;
            width: 80px;
            position: absolute;
            transition: all .25s;
            left:0;
            top: 0;
        }

        #start {
            background-image: url("images/grass.gif");
            width: 100%;
            height: 220px;

        }

        #finish {
            background-image: url("images/end.jpg");
            background-size: auto;
            width: 100%;
            height: 200px;

        }

        #road {
            background-image: url("images/images.jpg");
            background-repeat: repeat-x;
            background-size: contain;
            padding: 5px;
        }

        .car {

            background-size: contain;
            background-repeat: no-repeat;
            margin-top: 20px;
            margin-bottom: 50px;
            width: 150px;
            height: 70px;
            position: relative;
            left: -10vw;
            animation-name: orangecar;
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

        }

        .car.car2 {


            position: relative;
            left:100vw;
            animation-name: car2;
            animation-duration: 1.5s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;

        }

        .car.car3 {

            transform: rotate(180deg);
            position: relative;
            left: -10vw;
            margin-bottom: 50px;
            animation-name: car3;
            animation-duration: 2s;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;

        }

        .car.car1 {

            transform: rotate(180deg);
            left:100vw;
            animation-name: car1car;
            animation-duration: 3s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
        }

       


        @keyframes car2 {
            100% {left: -15vw;}
        }

        @keyframes orangecar {
            100% {left: 100vw;}
        }

        @keyframes car3 {
            100% {left: 100vw;}
        }

        @keyframes car1car {
            100% {left: -12vw;}
        }
    </style>

</head>
<body>
<div id="sky"></div>
<img src="images/wait.gif" id="isaac" />

<div id="start">
</div>
<div id="road">
    <div class="car car1"><img src="images/player_car.jpg" width="100" height="60"/></div>

    <div class="car car2"><img src="images/player_car.jpg" width="100" height="60"/></div>

    <div class="car car3"><img src="images/player_car.jpg" width="100" height="60"/></div>

    <div class="car"><img src="images/player_car.jpg" width="100" height="60"/></div>

</div>
<div id="finish"></div>
<script src="script.js"></script>
<script src="js/jquery.js"></script>

</body>
</html>
