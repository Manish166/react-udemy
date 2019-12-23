const HOURHAND = document.querySelector('#hourarm')
const MINHAND = document.querySelector('#minutearm')
const SECRHAND = document.querySelector('#secondarm')

var time={
    hours : 0,
    minutes : 0,
    seconds : 0
}
function runTheClock(){
    var date=new Date();
    time.hours=date.getHours()
    time.minutes = date.getMinutes(),
    time.seconds =date.getSeconds()
    HOURHAND.style.transform="translate(200px, 200px) rotate(" + ((time.hours*360/12)+(time.minutes*360/3600)-90) + "deg)";
    MINHAND.style.transform="translate(200px, 200px) rotate(" + ((time.minutes*360/60)+(time.seconds*360/3600)-90) + "deg)";
    SECRHAND.style.transform="translate(200px, 200px) rotate(" + (time.seconds*6-90) + "deg)";
};

var interval = setInterval(runTheClock, 1000);








