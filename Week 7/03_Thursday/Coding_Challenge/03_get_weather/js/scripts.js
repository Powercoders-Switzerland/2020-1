const apiKey = "1dae3ac01aa28e08d2d8b3bd96c7dc64";

const cities = document.getElementById("cities");
const section = document.getElementById("result");

const query1 = "http://api.openweathermap.org/data/2.5/weather?q="
let query2 = "&appid=" + apiKey + "&units=metric";

getWeather();
cities.addEventListener("change", getWeather);

function getWeather() {
    let fullQuery = query1 + cities.value + query2;
    fetch(fullQuery)
        .then(response => response.json())
        .then(data => showWeather(data));
}

function showWeather(data) {
    let weather = data["weather"][0]["description"];
    let weatherCapitalized = weather[0].toUpperCase() + weather.slice(1)
    let temp = data["main"]["temp"] += "ºC";
    let name = data["name"];
    let imageKey = data["weather"][0]["icon"];
    //let imageURL = "http://openweathermap.org/img/wn/" + imageKey + "@2x.png"
    let imageURL = "icons/" + imageKey + ".svg"

    section.innerHTML = `<h2>${name}</h2><p>${temp}</p><p>${weatherCapitalized}</p><img id="weatherImage">`;
    document.getElementById('weatherImage').src = imageURL;
}