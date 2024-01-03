//correction from day 8's review

async function fetchWeatherInfo(city) {
    try {
        let response = await fetch(`https://openweathermap.org/api/${city}`);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        let weatherData = await response.json();
        console.log('Weather information for:', city, weatherData);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

fetchWeatherInfo('Nairobi');
