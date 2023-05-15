function showWeather() {
  let city = "";
  if (document.getElementById("search").value.length != 0) {
    city = document.getElementById("search").value;
  } else city = "Jammu";

  // let city = document.getElementById("search").value;
  // if (city == "") city = "Jammu";

  alert(city);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6c0387614d2116469f8a6bfac2817576&units=metric`;

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
      City.textContent = `${data.name}`;
      temperature.textContent = `${data.main.temp}`;
      humidity.textContent = `${data.main.humidity}`;
      wind.textContent = `${data.wind.speed}`;
    });

  document.getElementById("weather").style.display = "flex";
}

window.onload = showWeather();
