function onCountdownLoad() {
    let date = new Date('January 20, 2024 19:30:00');
    let now = new Date();
    let daysLeft = Math.ceil((date - now) / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerText = daysLeft;
}

function main() {
    onCountdownLoad();
}