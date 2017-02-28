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

function background() {
    if (i>=0.9) {
        direction = false;
    }

    if (i<=0.7) {
        direction = true;
    }

    if (direction==false) {
        i-=0.0005;
    } else {
        i+=0.0005;
    }


b.style.background = "rgba(9,155,102," + i + ")";

//b.innerHTML = i;
// rgb(9,155,102)
}
