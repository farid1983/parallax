//2 type od timer
//1. setInterval(function,time in milisec)
//- funtion moveBox

var leftPos = 0;

var topPos = 0;

// setInterval(moveBox, 10);
// open back if want to use move only without timer

function moveBox() {
    console.log("Is moving!");

    if (leftPos > 900) {
        leftPos = -100;
    }

    leftPos += 5;// pixel no

    document.getElementById('box1').style.left = leftPos + "px";// console.log("leftpos", leftPos);



    if (topPos > 600) {
        topPos = -100;
    }

    topPos += 5;// pixel no

    document.getElementById('box2').style.top = topPos + "px";// console.log("toppos", topPos);

}

//2. countdown time
//-setTimeout(countDown,time in milisec)

setTimeout(countDown, 5000)

function countDown() {
    // console.log("GO!!!");
    setInterval(moveBox, 10);
}

