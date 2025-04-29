async function getWeather() {
    const city = document.getElementById("city").value;
    const apiKey = "fd3ce6aa2d7f109ddea5fc4e1d138721"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    try {
        const response = await fetch(url); 
        const data = await response.json(); 
        if (data.cod === 200) {
            const weatherData = `
            <h2>${data.name}</h2>
            <p><i class="fas fa-temperature-high"></i>Temperature:${data.main.temp}°C</p>
            <p><i class="fas fa-cloud"></i> Condition:${data.weather[0].description}</p>
        `;
          
            document.getElementById("weather").innerHTML = weatherData;
        } else {
            
            document.getElementById("weather").innerHTML = `
              <p><i class="fas fa-map-marker-alt"></i>Location not found.</p>`;
          }
          } catch (error) {
            
            document.getElementById("weather").innerHTML = `
              <p><i class="fas fa-exclamation-triangle"></i>Error getting weather.</p>`;
          }
        }

    