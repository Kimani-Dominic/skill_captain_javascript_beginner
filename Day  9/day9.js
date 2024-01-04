//Day 9
//Create an `async` function that simulates fetching data from an API.
// Use `setTimeout` to simulate a delay. Handle both successful and failed outcomes using Promises.


async function fetchProgrammingJoke() {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');

      if (!response.ok) {
        throw new Error(`Failed to fetch joke. Status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Programming Joke:', data.joke);
    } catch (error) {
      console.error('Error fetching joke:', error.message);
    }
  }
  
  // Call the function to fetch a programming joke
  fetchProgrammingJoke();
  