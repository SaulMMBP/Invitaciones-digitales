let subMensaje1 = "Hola soy ";
let subMensaje2 = ", confirmo mi asistencia a la fiesta de Emily";

function onCountdownLoad() {
    let date = new Date('January 20, 2024 19:30:00');
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

function onLoad() {
    setInterval(onCountdownLoad, 1000);
}