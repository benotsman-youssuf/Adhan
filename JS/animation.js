const fajr = document.getElementById('fajr');
const Dhuhr = document.getElementById('Dhuhr');
const Asr = document.getElementById('Asr');
const Maghrib = document.getElementById('Maghrib');
const Isha = document.getElementById('Isha');

const widget = document.getElementsByClassName('widget');


fajr.addEventListener('click' , () => {
    if (fajr.style.scale === '1.1') {
        fajr.style.scale = '1';
    }
    else fajr.style.scale = '1.1';
});