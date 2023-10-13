let subMensaje1 = "Hola soy ";
let subMensaje2 = ", confirmo mi asistencia a la fiesta de Emily";

const audio = new Audio("resources/audio/music.mp3");
audio.loop = true;
let isPlaying = false;

function onCountdownLoad() {
    let date = new Date('January 20, 2024 19:00:00');
    let now = new Date();
    let distance = date - now
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById('days').innerText = days;
    document.getElementById('hours').innerText = hours;
    document.getElementById('minutes').innerText = minutes;
    document.getElementById('seconds').innerText = seconds;
}

function onSubmit(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let mensaje = (subMensaje1 + name + subMensaje2).replace(" ", "%20");
    let url = "https://wa.me/+5215551817720?text=" + mensaje
    window.location.href = url;
}

function playMusic() {
    let playBtn = document.getElementById("play");
    let stopBtn = document.getElementById("stop");
    if(!isPlaying) {
        playBtn.classList.remove("hidden");
        stopBtn.classList.add("hidden");
        audio.play();
        isPlaying = true;
    } else {
        playBtn.classList.add("hidden");
        stopBtn.classList.remove("hidden");
        audio.pause();
        audio.currentTime = 0;
        isPlaying = false;
    }
}

function onLoad() {
    onCountdownLoad();
    setInterval(onCountdownLoad, 1000);
}