function getTime() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    if (hours>12) {
        var hours = hours-12;
        var output = "The time is " + hours + ":" + minutes + ":" + seconds + " PM";
    } else {
        var output = "The time is " + hours + ":" + minutes + ":" + seconds + " AM";
    }

    var p = document.getElementsByTagName("p");
    p[0].innerHTML = output;

    if (minutes==39&&seconds==00) {
        alert("yo nigga pack up");
    }
}

//setInterval(getTime, 1000);

function change() {
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


b.style.background = color[i];
//p.innerHTML = color[i] + "(" + i + ")";
}

function test() {
  document.getElementById("center-container").style.opacity = "1";
  }
