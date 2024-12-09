const APP_ID = '4c999ad937871c9f034d74c8b4a7bb76';
const value = "không xác định"
const cityName = document.querySelector('.city-name');
const weatherState = document.querySelector('.weather-state');
const temperature = document.querySelector('.temperature');
const weatherIcon = document.querySelector('.weather-icon');
const searchInput = document.querySelector('#search-input');

const sunrise = document.querySelector('.sunrise');
const sunset = document.querySelector('.sunset');
const humidity = document.querySelector('.humidity');
const windSpeed = document.querySelector('.wind-speed');

searchInput.addEventListener('change', (e) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`)
        .then(async res => {
            const data = await res.json();
            console.log('[Search Input]', data);
            cityName.innerHTML = data.name || value;
            weatherState.innerHTML = data.weather[0].description || value;
            weatherIcon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
            temperature.innerHTML = Math.round(data.main.temp) || value;

            sunrise.innerHTML = moment.unix(data.sys.sunrise).format('H:mm') || value;
            sunset.innerHTML = moment.unix(data.sys.sunset).format('H:mm') || value;
            humidity.innerHTML = data.main.humidity || value;
            windSpeed.innerHTML = (data.wind.speed  * 3.6).toFixed(2) || value;
        })
});
