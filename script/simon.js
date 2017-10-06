var arrayJuego = "";
var arrayJugador = "";
var turno = 0;

function rellenarString() {
    min = Math.ceil(0);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function playSound(url) {
    var audio = document.createElement('audio');
    audio.style.display = "none";
    audio.src = url;
    audio.autoplay = true;
    audio.onended = function () {
        audio.remove()
    };
    document.body.appendChild(audio);
}

function activaFicha(num) {
    clearTimeout();
    if (num == 0) {
        window.setTimeout(function () {
            document.getElementById("verde").style.backgroundColor = "green";
        }, 500);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"), 1000);
        window.setTimeout(function () {
            document.getElementById("verde").style.backgroundColor = "#7FC67F";
        }, 1500);
    };
    if (num == 1) {
        window.setTimeout(function () {
            document.getElementById("amarillo").style.backgroundColor = "#ffd800";
        }, 500);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"), 1000);
        window.setTimeout(function () {
            document.getElementById("amarillo").style.backgroundColor = "#FFFF80";
        }, 1500);
    };
    if (num == 2) {
        window.setTimeout(function () {
            document.getElementById("rojo").style.backgroundColor = "red";
        }, 500);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"), 1000);
        setTimeout(function () {
            document.getElementById("rojo").style.backgroundColor = "#FF7F7F";
        }, 1500);
    };
    if (num == 3) {
        window.setTimeout(function () {
            document.getElementById("azul").style.backgroundColor = "blue";
        }, 500);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"), 1000);
        window.setTimeout(function () {
            document.getElementById("azul").style.backgroundColor = "#799BFF";
        }, 1500);
    };
};

function turnoIA() {
    turno = turno + 1;
    document.getElementById("turnoActual").innerHTML = "<h2>" + turno + "</h2>";
    arrayJuego = arrayJuego + rellenarString()
    for (var i = 0; i < arrayJuego.length; i = i + 1) {
        setDelay(i);
    };

    function setDelay(i) {
        setTimeout(function () {
            activaFicha(arrayJuego[i]);
        }, i * 2000);

    };
    turnoJugador();
};

document.getElementById("empezar").onclick = function () {
    arrayJuego = "";
    arrayJugador = "";
    turno = 0;
    turnoIA();
};

function turnoJugador() {
    document.getElementById("verde").onclick = function () {
        arrayJugador = arrayJugador + 0;
        window.setTimeout(function () {
            document.getElementById("verde").style.backgroundColor = "green";
        }, 0);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3"), 500);
        window.setTimeout(function () {
            document.getElementById("verde").style.backgroundColor = "#7FC67F";
        }, 700);
        comprobarTurno()
    };
    document.getElementById("amarillo").onclick = function () {
        arrayJugador = arrayJugador + 1;
        window.setTimeout(function () {
            document.getElementById("amarillo").style.backgroundColor = "#ffd800";
        }, 0);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3"), 500);
        window.setTimeout(function () {
            document.getElementById("amarillo").style.backgroundColor = "#FFFF80";
        }, 700);
        comprobarTurno()
    };
    document.getElementById("rojo").onclick = function () {
        arrayJugador = arrayJugador + 2;
        window.setTimeout(function () {
            document.getElementById("rojo").style.backgroundColor = "red";
        }, 0);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3"), 500);
        window.setTimeout(function () {
            document.getElementById("rojo").style.backgroundColor = "#FF7F7F";
        }, 700);
        comprobarTurno()
    };
    document.getElementById("azul").onclick = function () {
        arrayJugador = arrayJugador + 3;
        window.setTimeout(function () {
            document.getElementById("azul").style.backgroundColor = "blue";
        }, 0);
        window.setTimeout(playSound("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3"), 500);
        window.setTimeout(function () {
            document.getElementById("azul").style.backgroundColor = "#799BFF";
        }, 700);
        comprobarTurno()
    };
};

function comprobarTurno() {
    if (arrayJuego.localeCompare(arrayJugador) == 0 && arrayJuego.length == arrayJugador.length && turno == 20) {
        document.getElementById("turnoActual").innerHTML = "<h2>" + "WIN" + "</h2>";
    } else
    if (document.getElementById("estricto").checked == false && arrayJuego.localeCompare(arrayJugador) != 0 && arrayJuego.length == arrayJugador.length && turno < 20) {
        arrayJugador = "";
        setTimeout(function () {
            for (var i = 0; i < arrayJuego.length; i = i + 1) {
                setDelay(i);
            };

            function setDelay(i) {
                setTimeout(function () {
                    activaFicha(arrayJuego[i]);
                }, i * 2000);
            };
            turnoJugador();
        }, 1500);
    } else
    if (arrayJuego.localeCompare(arrayJugador) == 0 && arrayJuego.length == arrayJugador.length && turno < 20) {
        arrayJugador = "";
        setTimeout("turnoIA()", 1500);
    } else
    if (document.getElementById("estricto").checked == true && arrayJuego.localeCompare(arrayJugador) != 0 && arrayJuego.length == arrayJugador.length && turno < 20) {
        arrayJugador = "";
        arrayJuego = "";
        turno = 0;
        document.getElementById("turnoActual").innerHTML = "<h2>" + "0" + "</h2>";
        setTimeout("turnoIA()", 1500);
    };
};