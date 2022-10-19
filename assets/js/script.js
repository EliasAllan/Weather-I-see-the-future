console.log;
var cityName = document.getElementById("city");
var stateCode = document.getElementById("state");
var countryCode = document.getElementById("country");
var getForecast = document.querySelector("#getForecast");



// create
// var currentWeatherEl = document.createElement("div");

// modify

// currentWeatherEl.textContent = city.country;

// append

// document.body.appendChild(currentWeatherEl);

// 338ceedf83a992ffd42dcc24175384c9
// '+'#city'+'#state'+'#country'+'

// city = '';
// state = '';
// country = '';

function getPlace(cityChoice) {
  // city = cityName.value;
  // state = stateCode.value;
  // country = countryCode.value;
  // console.log(cityName.value + ',' + stateCode.value + ',' + countryCode.value)
  // console.log(city, state, country)
  return cityChoice;
}

function fetchAPI() {
  var cityText = cityName.value;
  // var stateText = stateCode.value;
  // var countryText = countryCode.value;
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    getPlace(cityText) +
    "&appid=338ceedf83a992ffd42dcc24175384c9";
  // var placeholder = 'https://api.openweathermap.org/data/2.5/forecast?q='+ getPlace(cityText, stateText, countryText) +'&appid=338ceedf83a992ffd42dcc24175384c9';
  // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city + ',' + state + ',' + country + '&appid=338ceedf83a992ffd42dcc24175384c9';
  // var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=338ceedf83a992ffd42dcc24175384c9`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("Github Repo Issues \n----------");
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        // console.log("url: " + data[i].url + " login: " + data[i].user.login)
      }
      console.log(data[i]);
      // TODO: Loop through the response
      // TODO: Console log each issue's URL and each user's login
      //create
      var cityNameEl = document.createElement("p")
      var currentTempEl = document.createElement("p");
      var currentWindEl = document.createElement("p");
      var currentHumidityEl = document.createElement("p");
      // modify
      cityNameEl.textContent = data.city.name
      currentTempEl.textContent = "Temp: " + ((data.list[0].main.temp - 273.15)* 1.8 )+32 ;
      currentWindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";

      

      // currentWeatherEl.textContent = data.city.name;
      cityNameEl.setAttribute('style', 'font-size:25px')
      currentTempEl.setAttribute('style', 'font-size:25px')
      currentWindEl.setAttribute('style', 'font-size:25px')
      currentHumidityEl.setAttribute('style', 'font-size:25px')
      // append
      document.body.children[1].children[1].appendChild(cityNameEl);
      document.body.children[1].children[1].appendChild(currentTempEl);
      document.body.children[1].children[1].appendChild(currentWindEl);
      document.body.children[1].children[1].appendChild(currentHumidityEl);
      
      console.log(currentTempEl, currentWindEl , currentHumidityEl)
    });
}
getPlace();

getForecast.addEventListener("click", fetchAPI);
