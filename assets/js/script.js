function saveToStorage(name) {
  var cityNameArray = JSON.parse(localStorage.getItem("City Name")) || [];
  if (cityNameArray.includes(name)) {
    return;
  }
  if (cityNameArray.length > 4) {
    cityNameArray.shift();
  }
  cityNameArray.push(name);
  localStorage.setItem("City Name", JSON.stringify(cityNameArray));
  renderStorage();
}

function renderStorage() {
  var cityNameArray = JSON.parse(localStorage.getItem("City Name"));
  console.log(cityNameArray);
  document.getElementById("history").innerHTML = "";
  for (var i = 0; i < cityNameArray?.length ; i++) {
    var savedCityEl = document.createElement("button");
    savedCityEl.innerHTML = cityNameArray[i];
    document.getElementById("history").append(savedCityEl);
    savedCityEl.addEventListener("click", getValue)
  }
}
renderStorage();
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

function getValue(event) {
  event.preventDefault()
  if(event.target.id === "getForecast"){
    var cityName = document.getElementById("city");
    if(!cityName.value){
      return
    }
    fetchAPI(cityName.value)
    saveToStorage(cityName.value)
    return
  }
  fetchAPI(event.target.innerHTML)
}

function fetchAPI(cityParam) {
  // var stateText = stateCode.value;
  // var countryText = countryCode.value;
  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityParam +
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
        console.log(data[i]);
      }
      // TODO: Loop through the response
      // TODO: Console log each issue's URL and each user's login
      //create
      var currentForecastEl = document.querySelector("#currentForecast");
      currentForecastEl.innerHTML = "";

      // create
      var futureForecastsContainer = document.createElement("div")

      var fiveDayForeDay1Card = document.createElement("div")
      var fiveDayForeDay2Card = document.createElement("div")
      var fiveDayForeDay3Card = document.createElement("div")
      var fiveDayForeDay4Card = document.createElement("div")
      var fiveDayForeDay5Card = document.createElement("div")

      var tempDay1 = document.createElement("h6")
      var tempDay2 = document.createElement("h6")
      var tempDay3 = document.createElement("h6")
      var tempDay4 = document.createElement("h6")
      var tempDay5 = document.createElement("h6")

      var windDay1 = document.createElement("h6")
      var windDay2 = document.createElement("h6")
      var windDay3 = document.createElement("h6")
      var windDay4 = document.createElement("h6")
      var windDay5 = document.createElement("h6")

      var cityNameEl = document.createElement("p");
      var currentTempEl = document.createElement("p");
      var currentWindEl = document.createElement("p");
      var currentHumidityEl = document.createElement("p");
      // modify
      fiveDayForeDay1Card.setAttribute("class", "cards");
      fiveDayForeDay2Card.setAttribute("class", "cards");
      fiveDayForeDay3Card.setAttribute("class", "cards");
      fiveDayForeDay4Card.setAttribute("class", "cards");
      fiveDayForeDay5Card.setAttribute("class", "cards");

      // windDay1.setAttribute("class", "cards");
      // windDay2.setAttribute("class", "cards");
      // windDay3.setAttribute("class", "cards");
      // windDay4.setAttribute("class", "cards");
      // windDay5.setAttribute("class", "cards");


      tempDay1.textContent = "Temp: " + Math.floor((data.list[7].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay2.textContent = "Temp: " + Math.floor((data.list[15].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay3.textContent = "Temp: " + Math.floor((data.list[23].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay4.textContent = "Temp: " + Math.floor((data.list[31].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay5.textContent = "Temp: " + Math.floor((data.list[39].main.temp - 273.15) * 1.8 + 32) + "°F";

      windDay1.textContent = "Wind: " + data.list[7].wind.speed   + "MPH";
      windDay2.textContent = "Wind: " + data.list[15].wind.speed  + "MPH";
      windDay3.textContent = "Wind: " + data.list[23].wind.speed  + "MPH";
      windDay4.textContent = "Wind: " + data.list[31].wind.speed  + "MPH";
      windDay5.textContent = "Wind: " + data.list[39].wind.speed  + "MPH";


      // tempDay1.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      cityNameEl.textContent = data.city.name 
      currentTempEl.textContent = "Temp: " + Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32) + "°F";
      currentWindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      
      currentWindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";
     
      cityNameEl.setAttribute("style", "font-size:25px");
      currentTempEl.setAttribute("style", "font-size:25px");

      futureForecastsContainer.setAttribute("style", "display:flex");
      // tempDay2.setAttribute("style", "margin-left:265px");
      // tempDay3.setAttribute("style", "margin-left:265px");
      // tempDay4.setAttribute("style", "margin-left:265px");
      // tempDay5.setAttribute("style", "margin-left:265px");

      currentWindEl.setAttribute("style", "font-size:25px");
      currentHumidityEl.setAttribute("style", "font-size:25px");
      iconEl = document.createElement('img')
      iconLink = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
      iconEl.setAttribute("src", iconLink)
      console.log(iconEl)
      document.body.children[1].children[1].append(iconEl)
      // append
      // searchContainer.appendChild(savedCityEl);

      document.body.appendChild(futureForecastsContainer)
      futureForecastsContainer.appendChild(fiveDayForeDay1Card);
      futureForecastsContainer.appendChild(fiveDayForeDay2Card);
      futureForecastsContainer.appendChild(fiveDayForeDay3Card);
      futureForecastsContainer.appendChild(fiveDayForeDay4Card);
      futureForecastsContainer.appendChild(fiveDayForeDay5Card);

      fiveDayForeDay1Card.appendChild(tempDay1);
      fiveDayForeDay2Card.appendChild(tempDay2);
      fiveDayForeDay3Card.appendChild(tempDay3);
      fiveDayForeDay4Card.appendChild(tempDay4);
      fiveDayForeDay5Card.appendChild(tempDay5);

      fiveDayForeDay1Card.appendChild(windDay1);
      fiveDayForeDay2Card.appendChild(windDay2);
      fiveDayForeDay3Card.appendChild(windDay3);
      fiveDayForeDay4Card.appendChild(windDay4);
      fiveDayForeDay5Card.appendChild(windDay5);

      document.body.children[1].children[1].appendChild(cityNameEl);
      document.body.children[1].children[1].appendChild(currentTempEl);
      document.body.children[1].children[1].appendChild(currentWindEl);
      document.body.children[1].children[1].appendChild(currentHumidityEl);
      
      
      console.log(currentTempEl, currentWindEl, currentHumidityEl);
    });
}
// getPlace();

var getForecast = document.querySelector("#getForecast");
getForecast.addEventListener("click", getValue);
