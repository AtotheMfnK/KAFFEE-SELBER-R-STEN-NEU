const url = "https://api.openweathermap.org/data/2.5/weather?appid=c7dd2826a943d88466223eff695dbc49&units=metric";

// let Hamburg = "Hamburg";
const fCityName=document.querySelector("#Hamburg");

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


showWeatherCity("Hamburg");
