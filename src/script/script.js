const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const audio = document.querySelector('audio');
audio.play();






const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hour = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();


    if (hour < 10 ) {
        hour = '0'+ hour;
    } else if (min < 10) {
        min = '0' + min;
    } else if (sec < 10) {
        sec = '0' + sec;
    }



    horas.textContent = hour;
    minutos.textContent = min;
    segundos.textContent = sec;


   


   
})