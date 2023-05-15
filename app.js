function showWeather() {
  let city = "";
  if (document.getElementById("search").value.length != 0) {
    city = document.getElementById("search").value;
  } else city = "Jammu";

  let api_key = "6c0387614d2116469f8a6bfac2817576";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;

  let City = document.getElementById("city");
  let humidity = document.getElementById("humidity");
  let temperature = document.getElementById("temperature");
  let wind = document.getElementById("wind");

  const promise = new Promise((resolve, reject) => {
    const weather = fetch(url);
    resolve(weather);
  });

  promise
    .then((response) => response.json())
    .then((data) => {
      if (data.name == undefined) {
        City.textContent = data.message;
        temperature.textContent = ``;
        humidity.textContent = ``;
        wind.textContent = ``;
      } else {
        City.textContent = `${data.name}`;
        temperature.textContent = `${data.main.temp} °`;
        humidity.textContent = `${data.main.humidity} %`;
        wind.textContent = `${data.wind.speed} m/s`;
      }
    });

  document.getElementById("weather").style.display = "flex";
}

window.onload = showWeather();
