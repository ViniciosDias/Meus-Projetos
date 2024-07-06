const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sd = dateToday.getSeconds();

    if ( hr < 10) hr = '0' + hr;
    if ( min < 10) min = '0' + min;
    if ( sd < 10) sd = '0' + sd;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sd;
});