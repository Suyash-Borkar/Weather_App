const cityInput = document.querySelector(' .city-input');
const searchBtn = document.querySelector(' .search-btn');

const apikey = '7c93b27d120123ae3760df755cab277c';

searchBtn.addEventListener('click', () => {
    if(cityInput.value.trim() !== '') {
        updateWeatherInfo();
        cityInput.value = '';
        cityInput.blur();
    }
})
cityInput.addEventListener('keydown', (event) => {
    if(event.key === 'Enter' && cityInput.value.trim() !== '') {
        updateWeatherInfo();
        cityInput.value = '';
        cityInput.blur();
    }
})
async function getFetchData(endPoint, city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/${endPoint}?q=${city}&appid=${apikey}&units=metric`;

    const response = await fetch(apiUrl);

    return response.json();
}

async function updateWeatherInfo(city) {
    const weatherData = await getFetchData('weather',)
    if(weatherData.cod !== 200) {
        showDissplaySection(notFoundSection);
        alert('City not found!');
        return;
    }
}

function showDissplaySection(section) {