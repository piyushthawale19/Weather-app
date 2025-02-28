function getWeather() {
    const apiKey = "e7bd7933a1ab46e5bdc142910252502";
    let location = document.getElementById("locationInput").value;

    if (!location) {
        alert("Please enter a location!");
        return;
    }

    let url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("weatherResult").innerHTML = `<p style="color: red;">${data.error.message}</p>`;
            } else {
                document.getElementById("weatherResult").innerHTML = `
                    <p>Location: <strong>${data.location.name}, ${data.location.country}</strong></p>
                    <p>Temperature: <strong>${data.current.temp_c}°C</strong></p>
                    <p>Condition: <strong>${data.current.condition.text}</strong></p>
                    <img src="${data.current.condition.icon}" alt="Weather Icon">
                `;
            }
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherResult").innerHTML = `<p style="color: red;">Failed to fetch weather data.</p>`;
        });
}
