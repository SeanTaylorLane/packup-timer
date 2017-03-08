function printTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    if (seconds<10) {
        seconds = "0" + seconds;
    }

    if (minutes<10) {
      minutes = "0" + minutes;
    }

    if (hours>12) {
        hours = hours-12;
        var output = "The time is " + hours + ":" + minutes + ":" + seconds + " PM";
    } else {
        var output = "The time is " + hours + ":" + minutes + ":" + seconds + " AM";
    }

    var timer = document.getElementById("timer");
    timer.innerHTML = output;
}

function changeBG() {
    
    if (i>9) {
        direction = false;
    }

    if (i<1) {
        direction = true;
    }

    if (direction===false) {
        --i;
    } else {
        ++i;
    }


body.style.background = color[i];
//header.innerHTML = color[i] + "(" + i + ")";
}

function fadeIn() {
  document.getElementById("center-container").style.opacity = "1";
}

function screenSwap() { //function called on "Go!" button and "X" button
  var frontContent = document.getElementById("front-content"); //creates an easy-to-write variable for the front content
  var timerContent = document.getElementById("timer-content"); //creates an easy-to-write variable for the timer content
  var frontDisplay = frontContent.style.display;
  var timerDisplay = timerContent.style.display;
  
  function toTimer() {
      frontContent.style.display="none";
      timerContent.style.display="block";
      timerContent.style.opacity="1";
  }
  
  function toFront() {
      timerContent.style.display="none";
      frontContent.style.display="block";
      frontContent.style.opacity="1";
  }
  
  if (timerDisplay=="none") {
     frontContent.style.opacity = "0"; //causes the front content to fade out, but remain on the page
     setTimeout(toTimer, 200); //after fadeout, sets front display to none and timer display to block
     var getTimeInterval = setInterval(printTime, 1000); //prints the time
  //setTimeout(function(){document.getElementById("timer").innerHTML = frontDisplay;}, 1200);
  //setTimeout(function(){document.getElementById("timer").innerHTML = timerDisplay;}, 1200); //testing to see display property value (wont change to block???!!)
  //timerContent.style.opacity = "1"; //fades in the timer. not working for some reason :(
  }
  
  if (frontDisplay=="none") {
     timerContent.style.opacity = "0";
     setTimeout(toFront, 200);
     clearInterval(getTimeInterval); //stops the printing of the time but isnt stopping it :%
  }
    
}
