var onion = document.getElementById('onion');
var container = document.getElementById('container');

var layerZero = document.getElementById("layerZero");
var layerOne = document.getElementById("layerOne");
var layerTwo = document.getElementById("layerTwo");
var layerThree = document.getElementById("layerThree");
var layerFour = document.getElementById("layerFour");
var layerFive = document.getElementById("layerFive");
var layerSix = document.getElementById("layerSix");

var mouseX = 0;
var mouseY = 0;

var centerScreen = (1200 / 2) - (1200 / 2);
// this var can be used in the -mouseX as variable

window.addEventListener("mousemove", onMouseMove);
//(type of event, listener(func name))

function onMouseMove(event) {
    console.log(event.pageX);

    mouseX = event.pageX - container.offsetLeft;
    mouseY = event.pageY;

    onion.style.left = mouseX - 25 + 'px';
    onion.style.top = mouseY - 25 + 'px';

    layerZero.style.left = (-mouseX * 0.02) + (1000 / 2 - 1200 / 2) + "px";
    layerOne.style.left = (-mouseX * 0.03) + (1000 / 2 - 1200 / 2) + "px";
    layerTwo.style.left = (-mouseX * 0.04) + (1000 / 2 - 1200 / 2) + "px";
    layerThree.style.left = (-mouseX * 0.05) + centerScreen + "px";
    layerFour.style.left = (-mouseX * 0.06) + (1000 / 2 - 1200 / 2) + "px";
    layerFive.style.left = (-mouseX * 0.07) + (1000 / 2 - 1200 / 2) + "px";
    layerSix.style.left = (-mouseX * 0.08) + (1000 / 2 - 1200 / 2) + "px";

    //lower no lower gap 0.05, 0.08
}

