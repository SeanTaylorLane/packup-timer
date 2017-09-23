function timerLoad() {
  userMessage = document.getElementById("userMessageInput").value;
  if (userMessage=="") {
    userMessage = null;
  }
  var userTimeSelect = document.getElementById("userTimeSelect");
  userTime = Number(userTimeSelect.options[userTimeSelect.selectedIndex].value);
  
  var newDate = new Date();
  d = {
    hours: newDate.getHours(),
    mins: newDate.getMinutes(),
    secs: newDate.getSeconds(),
  }
//  CHANGE TO TEST TIMER FUNCTIONALITY
//  d = {
//      hours: 8,
//      mins: 15,
//      secs: 0,
//  }
  whatPeriod(d);
  // CHANGE 1000 TO 17 TO TEST PER SECOND
  packupTimer = setInterval(packup, 1000);
  alarmTimer = setInterval(alarm, 1000);
  packup(); //so that there isn't a 1 second delay when loading the timer for the first time
  
  document.getElementById("timer-packup").style.display = "none";
  document.getElementById("timer-h1").style.display = "block";
  document.getElementById("timer-h3").style.display = "block";
  
  if (userTime==1) {
    document.getElementById("timer-h3").innerHTML = "We'll notify you 1 minute prior"
  } else {
    document.getElementById("timer-h3").innerHTML = "We'll notify you " + userTime + " minutes prior";
  }
}

function timerUnload() {
  userMessage = null;
  clearInterval(packupTimer);
  clearInterval(alarmTimer);
}

function whatPeriod(date) {
   if((date.hours>=7)&&(date.hours<=14)){
    switch(date.hours){
        case 7:
            period = 1;
            secondsUntilEnd = ((60-date.mins) + 18) * 60;
            break;
        case 8:
            if(date.mins<18){
                period = 1;
                secondsUntilEnd = (18-date.mins)*60;
            } else {
                period = 2;
                secondsUntilEnd = ((60-date.mins)+7)*60;
            }
            break;
        case 9:
            if(date.mins<7){
                period = 2;
                secondsUntilEnd = (7-date.mins)*60;
            } else if (date.mins<53) {
                period = 3;
                secondsUntilEnd = (53-date.mins)*60;
            } else {
                period =4;
                secondsUntilEnd = ((60-date.mins)+39)*60;
            }
            break;
        case 10:
            if(date.mins<39){
                period = 4;
                secondsUntilEnd = (39-date.mins)*60;
            } else {
                period = 5;
                secondsUntilEnd = ((60-date.mins)+24)*60;
            }
            break;
        case 11:
            if(date.mins<24){
                period = 5;
                secondsUntilEnd = (24-date.mins)*60;
            } else {
                period = 6;
                secondsUntilEnd = ((60-date.mins)+9)*60;
            }
            break;
        case 12:
            if(date.mins<9){
                period = 6;
                secondsUntilEnd = (9-date.mins)*60;
            } else if (date.mins<54) {
                period = 7;
                secondsUntilEnd = (54-date.mins)*60;
            } else {
                period = 8;
                secondsUntilEnd = ((60-date.mins)+39)*60;
            }
            break;
        case 13:
            if(date.mins<39){
                period = 8;
                secondsUntilEnd = (39-date.mins)*60;
            } else {
                period = 9;
                secondsUntilEnd = ((60-date.mins)+25)*60;
            }
            break;
        case 14:
            period = 9;
            secondsUntilEnd = (25-date.mins)*60;
            break;
    }
   } else if (date.hours<7) {
       period = 1;
       secondsUntilEnd = ((((7-date.hours)*60) + (60-date.mins)) +18)*60;
   } else if (date.hours>14) {
       period = 1;
       secondsUntilEnd = (((23-date.hours)*60) + (60-date.mins) + (8*60) + 18)*60;
   }
   secondsUntilAlert = secondsUntilEnd-(userTime*60); //very important for the alert!
}

function packup() {
    var minsUntil;
    if (secondsUntilEnd > 60) {
    minsUntil = Math.ceil(secondsUntilEnd / 60);
    document.getElementById("timer-h1").innerHTML = "Period " + period + " ends in " + minsUntil + " minutes";
    secondsUntilEnd--;
    } else if (secondsUntilEnd>0) {
        document.getElementById("timer-h1").innerHTML = "Period " + period + " ends in 1 minute";
        secondsUntilEnd--;
    } else if (secondsUntilEnd <= 0) {
        if(d.hours==14) {
            clearInterval(packupTimer);
            document.getElementById("timer-h1").innerHTML = "School's over!";
            console.log("Interval stopped");
        } else {
        clearInterval(packupTimer);
        document.getElementById("timer-h1").innerHTML = "The period has ended.";
        console.log("Interval stopped");
        }
    }
}

function alarm() {
    if (secondsUntilAlert<0) {
        clearInterval(alarmTimer);
        clearInterval(packupTimer);
        if (userTime==1) {
          document.getElementById("timer-h1").innerHTML = "The period ends within " + userTime + " minute";
          document.getElementById("timer-h3").innerHTML = "Please pick a different alert time";
        } else {
          document.getElementById("timer-h1").innerHTML = "The period ends within " + userTime + " minutes";
          document.getElementById("timer-h3").innerHTML = "Please pick a different alert time";
        }
    } else if (secondsUntilAlert==0) {
        document.getElementById("timer-h1").style.display = "none";
        document.getElementById("timer-h3").style.display = "none";
        document.getElementById("timer-packup").style.display = "block";
        clearInterval(alarmTimer);
        clearInterval(packupTimer);
        if (userMessage != null) {
            document.getElementById("timer-packup").innerHTML = userMessage;
            alert(userMessage);
            console.log(userMessage);
        } else {
            document.getElementById("timer-packup").innerHTML = "Pack up!"
            alert("Packup!");
            console.log("Packup!");
        }
    } else {
        secondsUntilAlert--;
    }
}
function changeBG() {

    if (colorInterval>9) {
        direction = false;
    }

    if (colorInterval<1) {
        direction = true;
    }

    if (direction==false) {
        --colorInterval;
    } else {
        ++colorInterval;
    }


body.style.background = color[colorInterval]; //CSS takes care of the transition
}

function fadeIn() {
  frontCenter.style.opacity = "1";
}

function screenSwap() { //function called on "Go!" button and "X" button
  var frontContent = document.getElementById("front-content"); //creates an easy-to-write variable for the front content
  var timerContent = document.getElementById("timer-content"); //creates an easy-to-write variable for the timer content
  var frontDisplay = frontContent.style.display; //variable for front-content dislay property
  var timerDisplay = timerContent.style.display; // variable for timer-content display property

  function toTimer() {
      frontContent.style.display="none";
      timerContent.style.display="block";
      timerContent.style.opacity="1";
      //centerContainer.style.height="auto";
  }

  function toFront() {
      timerContent.style.display="none";
      frontContent.style.display="block";
      frontContent.style.opacity="1";
  }

  if (timerDisplay=="none") {
     timerLoad();
     frontContent.style.opacity = "0"; //causes the front content to fade out, but remain on the page
     setTimeout(toTimer, 200); //after fadeout, sets front display to none and timer display to block
  //timerContent.style.opacity = "1"; //fades in the timer. not working for some reason :(
  } else if (frontDisplay=="none") {
     timerUnload();
     timerContent.style.opacity = "0";
     setTimeout(toFront, 200);
  } else { //for debugging
    frontCenter.style.background = "red";
    timerCenter.style.background = "blue";
  }
    
    
    

}
