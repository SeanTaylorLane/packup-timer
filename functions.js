function getTime() {
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


    if (minutes==39&&seconds==00) {
        alert("yo nigga pack up");
    }
}

//setInterval(getTime, 1000);

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

function screenSwap() {
  var frontContent = document.getElementById("front-content"); //creates an easy-to-write variable for the front content
  var timerContent = document.getElementById("timer-content"); //same thing for timer content

  frontContent.style.opacity = "0"; //causes the front content to fade out, but remain on the page
  setTimeout(function(){frontContent.style.display="none"; timerContent.style.display="block"; timerContent.style.opacity="1";}, 200); //after fadeout, sets front display to none and timer display to block
  //timerContent.style.opacity = "1"; //fades in the timer

  /*if (timerContent.style.display=="none") {
    frontContent.style.opacity = "0"; //causes the front content to fade out, but remain on the page
    setTimeout(function(){frontContent.style.display="none";}, 200); //sets display to none after fadeout
    timerContent.style.display= "block";
  } else {
    timerContent.style.opacity = "0";
    setTimeout(function(){timerContent.style.display="none";}, 200);
    setTimeout(function(){frontContent.style.display="block";}, 200);
    frontContent.style.opacity = "1";
  }*/


}
