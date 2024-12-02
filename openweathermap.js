const url = "https://api.openweathermap.org/data/2.5/weather?appid=&units=metric";

const fCityName=document.querySelector("#cityName");

function showData(data) {
    document.querySelector("#main").textContent=data.weather[0].main;
    document.querySelector("#description").textContent=data.weather[0].description;
    document.querySelector("#currentTemperature").textContent=data.main.temp;
}

function showWeatherCity(city) {
    fetch(`${url}&q=${city}`)
        .then(response => {
            if (!response.ok) {
                return Promise.reject("URL does not exist!");
            } else {
                return response.json();
            }
        })
        .then (data => {
            showData(data);
        })
        .catch(error => console.log(error));
}

fCityName.addEventListener("change", function() {
    // const city = fCityName.value;
    // showWeatherCity(city);
    showWeatherCity(fCityName.value);
})