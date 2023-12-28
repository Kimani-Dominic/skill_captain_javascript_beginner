// Fetch API's

// Create a function that fetches weather information for a specific city from the [OpenWeatherMap API](https://openweathermap.org/api). 
//Display the temperature, weather conditions, and other relevant data in the console.

async function fetchWeatherInfo(city) {
    try {
        let response = await fetch('https://openweathermap.org/api/${city}');
        let city = await response.json();
        console.log('Weather information for: ', city);
    }
    catch(error) {
        console.log('Error', error);
    }
}

fetchWeatherInfo(Nairobi);