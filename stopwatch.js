// var hours=00;
var minutes = 00;
var seconds = 00;
var tens = 00;

// var appendhours = document.getElementById("hours");
var appendminutes = document.getElementById("minutes");
var appendseconds = document.getElementById("seconds");
var appendtens = document.getElementById("tens");

var buttonstart = document.getElementById("StartTimer");
var buttonpause = document.getElementById("PauseTimer");
var buttonreset = document.getElementById("ResetTimer");
var interval;

function starttimer() {
  tens++;
  if (tens > 9) {
    tens = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
  }
  appendseconds.innerText = seconds;
  appendtens.innerText = tens;
  appendminutes.innerText = minutes;
}

buttonstart.onclick = () => {
  interval = setInterval(starttimer, 100);
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
  appendtens.innerHTML = "0" + tens;
  appendseconds.innerHTML = "0" + seconds;
  // appendminutes.innerHTML="0" + minutes;
  // appendhours.innerHTML= "0" + hours;
};
