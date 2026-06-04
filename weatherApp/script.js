// UI Elements
const searchBtn = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('city-input');

// Card Containers
const welcomeCard = document.getElementById('welcomeCard');
const loader = document.getElementById('loader');
const errorCard = document.getElementById('errorCard');
const weatherResult = document.getElementById('weatherResult');

// Output Elements
const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-time');
const cityTemp = document.getElementById('city-temp');
const weatherDesc = document.getElementById('weather-desc');
const weatherIcon = document.getElementById('weather-icon');

// Error fields
const errorDesc = document.getElementById('errorDesc');

const API_KEY = '6ae0b485ec6944b7861164901260206';

// Initialize search listeners
document.addEventListener('DOMContentLoaded', () => {
    // Allow pressing Enter key to search
    cityInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });
});

// Fetch weather by city name
async function fetchWeatherData(city) {
    const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=no`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText || 'Failed to fetch weather data');
    }
    return await response.json();
}

// Populate UI with retrieved weather data
function renderWeather(data) {
    // Update weather panel info
    cityName.innerText = `${data.location.name}, ${data.location.region || data.location.country}`;
    cityTime.innerText = `Local Time: ${formatLocalTime(data.location.localtime)}`;
    cityTemp.innerText = Math.round(data.current.temp_c);
    weatherDesc.innerText = data.current.condition.text;

    // Format WeatherAPI condition icon URL correctly
    let iconUrl = data.current.condition.icon;
    if (iconUrl.startsWith('//')) {
        iconUrl = 'https:' + iconUrl;
    }
    weatherIcon.src = iconUrl;
    weatherIcon.alt = data.current.condition.text;
}

// Display appropriate UI view states
function setViewState(state, errorMessage = '') {
    welcomeCard.classList.add('hidden');
    loader.classList.add('hidden');
    errorCard.classList.add('hidden');
    weatherResult.classList.add('hidden');

    if (state === 'welcome') {
        welcomeCard.classList.remove('hidden');
    } else if (state === 'loading') {
        loader.classList.remove('hidden');
    } else if (state === 'error') {
        errorCard.classList.remove('hidden');
        if (errorMessage) {
            errorDesc.innerText = errorMessage;
        } else {
            errorDesc.innerText = "We couldn't retrieve weather details for that location. Please check the spelling and try again.";
        }
    } else if (state === 'success') {
        weatherResult.classList.remove('hidden');
    }
}

// Format localtime string to a cleaner output
function formatLocalTime(localtimeStr) {
    try {
        const parts = localtimeStr.split(' ');
        if (parts.length === 2) {
            const dateParts = parts[0].split('-');
            const timeParts = parts[1].split(':');

            const dateObj = new Date(
                parseInt(dateParts[0]),
                parseInt(dateParts[1]) - 1,
                parseInt(dateParts[2]),
                parseInt(timeParts[0]),
                parseInt(timeParts[1])
            );

            return dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        }
    } catch (e) {
        console.error('Error formatting date:', e);
    }
    return localtimeStr; // Fallback to raw string
}

// Search Logic
async function handleSearch() {
    const query = cityInput.value.trim();
    if (!query) return;

    setViewState('loading');

    try {
        const data = await fetchWeatherData(query);
        renderWeather(data);
        setViewState('success');
        cityInput.value = '';
    } catch (error) {
        console.error(error);
        setViewState('error', `Could not find weather data for "${query}". Please check spelling.`);
    }
}

// Event Listeners
searchBtn.addEventListener('click', handleSearch);