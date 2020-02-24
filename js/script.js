
//calc the degree for each move
// move the hands continuously according to time

function rotateArms() {
    var timeNow = new Date(),
        hours = timeNow.getHours(),
        minutes = timeNow.getMinutes(),
        seconds = timeNow.getSeconds(),
        tick = 360/60; //angle of one tick

    var secondArmPosition = tick * seconds,
        minuteArmPosition = tick * minutes + seconds/60 * tick,
        hourArmPosition = tick * 5 * hours + minutes/60 * tick * 5;

    const HOURHAND = document.querySelector('#hour'),
        MINUTEHAND = document.querySelector('#minute'),
        SECONDHAND = document.querySelector('#second');

    function update() {
        secondArmPosition += tick; //arm moves extra 6/60 deg every sec
        minuteArmPosition += tick/60; //arm moves extra 6/60 deg every sec
        hourArmPosition += tick/60/60; //arm moves extra 6/60/60 deg every sec

        SECONDHAND.style.transform = 'rotate(' + secondArmPosition + 'deg)';
        MINUTEHAND.style.transform = 'rotate(' + minuteArmPosition + 'deg)'; 
        HOURHAND.style.transform = 'rotate(' + hourArmPosition + 'deg)';
    }
    update();
    setInterval(update, 1000);
}

function ready(funktio) {
    if (document.readyState != 'loading') {
        funktio();
    } else {
        document.addEventListener('DOMContentLoaded', funktio);
    }
}

ready(rotateArms());

var alarm = document.querySelector('#alarm');

function soundAlarm() {
    alarm.play();
}
