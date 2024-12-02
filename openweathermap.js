const url = "https://api.openweathermap.org/data/2.5/weather?appid=a9da3d59707a8ef5dfffc657b928ac47&units=metric";


const fCityName=document.querySelector("#Hamburg");

function showData(data) {
    document.querySelector("#main").textContent=data.weather[0].main;
    document.querySelector("#description").textContent=data.weather[0].description;
    document.querySelector("#currentTemperature").textContent=data.main.temp;
}

function showWeatherCity(Hamburg) {
    fetch(`${url}&q=${Hamburg}`)
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

fCityName.addEventListener("load", function() {
    // const city = fCityName.value;
    // showWeatherCity(city);
    showWeatherCity(fCityName.value);
})