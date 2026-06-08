const getLocationButton = document.getElementById("getLocationButton");
const locationOutput = document.getElementById("locationDisplay");

function gotcurrentLocation(position) {
console.log(position);
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
locationOutput.innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
}

function handleError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            locationOutput.innerText = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationOutput.innerText = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationOutput.innerText = "The request to get user location timed out.";
            break;
        default:
            locationOutput.innerText = "An unknown error occurred.";
            break;
    }
}   

getLocationButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(gotcurrentLocation, handleError);
    
});
const API_KEY = '6ae0b485ec6944b7861164901260206';

async function getData(latitude, longitude) {
    const promise = await fetch(
`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${latitude},${longitude}&aqi=no`
    );
    return await promise.json();
}

async function gotLocation(position) {
    const result=await getData(position.coords.latitude, position.coords.longitude);
    console.log(result);
}

WeatherButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(gotLocation, handleError);
});