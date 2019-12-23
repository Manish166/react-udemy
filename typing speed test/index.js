const ORIGINTEXT=document.getElementById("origintext")
const EIDTTEXT=document.getElementById("edittext")
const TIMER=document.getElementById("timer")
const STARTBUTTON=document.getElementById("start-button")
const COUNT=document.getElementById("count")
var m=0;
var interval = setInterval(runTimer, 1000);

//add event listener to the text area
EIDTTEXT.addEventListener("keyup", callEvents, false)

//get value of the text entry box
function callEvents(){
    calculateWords()
}
function calculateWords(){
    COUNT.innerText=ORIGINTEXT.value.length
    runTimer()
}

function runTimer(){
    m++
    console.log("runninng timer", m)
    
}


