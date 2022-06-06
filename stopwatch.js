var hours=00;
var minutes = 00;
var seconds = 00;
var tens = 00;

var appendhours = document.getElementById("hours");
var appendminutes = document.getElementById("minutes");
var appendseconds = document.getElementById("seconds");
var appendtens = document.getElementById("tens");

var buttonstart = document.getElementById("StartTimer");
var buttonpause = document.getElementById("PauseTimer");
var buttonreset = document.getElementById("ResetTimer");
var interval;

function starttimer() {
  tens++;
  if (tens > 99) {
    tens = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
      if(minutes>59){
        minutes=0;
        hours++;
      }
    }
  }
  displaytime();
}

function displaytime(){
  if (tens<9){
    appendtens.innerText = "0" + tens;
  }
  else if(tens>9) {
    appendtens.innerText = tens;
  }
  else if(seconds<9){
    appendseconds.innerText="0"+seconds;
  }
  else if(seconds>9){
    appendseconds.innerText = seconds;
  }
  if(minutes<9) {
    appendminutes.innerText = "0"+minutes;
  }
  else if(minutes>9){
    appendminutes.innerText=minutes;
  }  
  if(hours<9) {
    appendhours.innerText = "0"+hours;
  }
  else if(hours>9){
    appendhours.innerText = hours;
  }
}

buttonstart.onclick = () => {
  interval = setInterval(starttimer, 10);
};

buttonpause.onclick = () => {
  clearInterval(interval);
};

buttonreset.onclick = function () {
  clearInterval(interval);
  tens = 00;
  seconds = 00;
  minutes = 00;
  hours = 00;
  appendtens.innerHTML="0" + tens;
  appendseconds.innerHTML="0" + seconds;
  appendminutes.innerHTML="0" + minutes;
  appendhours.innerHTML= "0" + hours;
};
