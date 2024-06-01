const search = document.getElementById('search-button');
const input = document.getElementById('search-input');
const city = document.getElementById('city-name');
const realTime = document.getElementById('real-time');
const hero = document.querySelector('.hero');

const fajrTime = document.getElementById('fajr-time');
const dhuhrTime = document.getElementById('dhuhr-time');
const asrTime = document.getElementById('asr-time');
const maghribTime = document.getElementById('maghrib-time');
const ishaTime = document.getElementById('isha-time');

let Hours = new Date().getHours();

const updateClock = () => {
    const now = new Date();
    realTime.innerText = now.toLocaleTimeString();
    return now;
};
setInterval(updateClock, 1000);

async function getLocationFromIP() {
    try {
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      const { latitude, longitude } = data;
      fetchAdhan(latitude, longitude);
    } catch (error) {
      console.error('Error getting location from IP:', error);
    }
  }
  
getLocationFromIP();




const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}-${month}-${year}`;
};
const date = getDate();

const fetchAdhan = async (lat, lon) => {
    try {
        const response = await fetch(`https://api.aladhan.com/v1/timings/${date}?latitude=${lat}&longitude=${lon}&method=3`);
        const data = await response.json();

        const timings = data.data.timings;

        fajrTime.innerText = timings.Fajr;
        dhuhrTime.innerText = timings.Dhuhr;
        asrTime.innerText = timings.Asr;
        maghribTime.innerText = timings.Maghrib;
        ishaTime.innerText = timings.Isha;

    } catch (error) {
        console.log(error);
    }
}
const fetchPlace = async (place) => {
    try{
        const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${place}&format=json`);
        const data = await response.json();

        const lat = data[0].lat;
        const lon = data[0].lon;
        fetchAdhan(lat, lon);
        console.log(lat , lon);
    }
    catch(error){
        console.log(error);
    }
}; 

search.addEventListener('click', () => {
    fetchPlace(input.value);

    city.innerText = input.value;
    input.value = '';

}
);


const AdhanBehaviour = () => {
    if (Hours >= 0 && Hours < 5) {
        document.getElementById('fajr').style.backgroundImage = 'url("./img/fajr.jpeg")';
        document.getElementById('fajr').style.transform = 'scale(1.06)';
        hero.style.background = 'linear-gradient(to bottom, rgba(10, 24, 48, 0.9), rgba(37, 24, 61, 0.9)), url("./img/medina.jpg") center/cover no-repeat';

    }
    if (Hours >= 5 && Hours < 14) {
        document.getElementById('fajr').style.background = 'rgb(253,169,78)'

        document.getElementById('Dhuhr').style.backgroundImage = 'url("./img/duhr.jpeg")';
        document.getElementById('Dhuhr').style.transform = 'scale(1.06)';
        hero.style.background = 'linear-gradient(to bottom, rgba(238, 134, 111, 0.8), rgba(114, 59, 99, 0.8)), url("./img/medina.jpg") center/cover no-repeat';
    }
    if (Hours >= 14 && Hours < 17) {
        document.getElementById('Asr').style.backgroundImage = 'url("./img/asr.jpeg")';
        document.getElementById('Asr').style.transform = 'scale(1.06)';
        hero.style.background = 'linear-gradient(to bottom, rgba(211, 224, 231, 0.8), rgba(241, 200, 89, 0.8)), url("./img/medina.jpg") center/cover no-repeat';    
    }
    if (Hours >= 17 && Hours < 21) {
        document.getElementById('Maghrib').style.backgroundImage = 'url("./img/maghrib.jpeg")';
        document.getElementById('Maghrib').style.transform = 'scale(1.06)';
        hero.style.background = 'linear-gradient(to bottom, rgba(238, 134, 111, 0.8), rgba(114, 59, 99, 0.8)), url("./img/medina.jpg") center/cover no-repeat';
    }
    if (Hours >= 21 && Hours < 24) {
        document.getElementById('Isha').style.backgroundImage = 'url("./img/isha.jpeg")';
        document.getElementById('Isha').style.transform = 'scale(1.06)';
        hero.style.background = 'linear-gradient(to bottom, rgba(10, 24, 48, 0.9), rgba(37, 24, 61, 0.9)), url("./img/medina.jpg") center/cover no-repeat';
    }
};
AdhanBehaviour();
