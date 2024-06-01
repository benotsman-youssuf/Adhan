const search = document.getElementById('search-button');
const input = document.getElementById('search-input');
const city = document.getElementById('city-name');
const realTime = document.getElementById('real-time');

const fajrTime = document.getElementById('fajr-time');
const dhuhrTime = document.getElementById('dhuhr-time');
const asrTime = document.getElementById('asr-time');
const maghribTime = document.getElementById('maghrib-time');
const ishaTime = document.getElementById('isha-time');

const updateClock = () => {
    const now = new Date();
    realTime.innerText = now.toLocaleTimeString();
};
setInterval(updateClock, 1000);

const getDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${day}-${month}-${year}`;
};
const date = getDate();


search.addEventListener('click', () => {
    fetchPlace(input.value);


    city.innerText = input.value;
    input.value = '';

});



const fetchAdhan = async (lat, lon) => {
    try {
        const response = await fetch(`http://api.aladhan.com/v1/timings/1-6-2024?latitude=${lat}&longitude=${lon}&method=3`);
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
        console.log(lat, lon);    
        fetchAdhan(lat, lon);
    }
    catch(error){
        console.log(error);
    }
}; 


