function showWeather() {
  const city = document.getElementById("search").value;
  const apiKey = "9e45232019b6a180894b47481d9db2f5";

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
