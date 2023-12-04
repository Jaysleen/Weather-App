//main.js
const apiKey = 'YOUR_API_KEY';
const weatherResult = document.getElementById('weatherResult');

async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    if (!cityInput) {
        alert('Please enter a city');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            displayWeather(data);
        } else {
            alert(`Error: ${data.message}`);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function displayWeather(data) {
    const { name, main, weather } = data;
    const temperature = main.temp;
    const description = weather[0].description;

    const resultHtml = `
        <h2>${name}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Description: ${description}</p>
    `;

    weatherResult.innerHTML = resultHtml;
}
