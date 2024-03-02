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
  document.getElementById("history").innerHTML = "";
  for (var i = 0; i < cityNameArray?.length ; i++) {
    var savedCityEl = document.createElement("button");
    savedCityEl.innerHTML = cityNameArray[i];
    document.getElementById("history").append(savedCityEl);
    savedCityEl.addEventListener("click", getValue)
  }
}
renderStorage();


function getValue(event) {
  console.log("click")
  var currentForecastEl = document.querySelector("#currentForecast");
  currentForecastEl.innerHTML = "";
  var futureForecastEl = document.querySelector("#futureForecast");
  // console.log(futureForecastEl)
  futureForecastEl.innerHTML = "";

  // event.preventDefault()
  if(event.target.id === "getForecast"){
    var city = document.getElementById("city");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var cityName = city.value+","+state.value+","+country.value
    console.log(cityName)
    if(!cityName){
      return
    }
    fetchAPI(cityName)
    saveToStorage(cityName)
    return
  }
  
  fetchAPI(event.target.innerHTML)
 
}

function fetchAPI(cityParam) {

  var requestUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    cityParam +
    "&appid=338ceedf83a992ffd42dcc24175384c9";
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // console.log("Github Repo Issues \n----------");
      // console.log(data);
      // console.log(document.body)
      // console.log(typeof document.body)
      
      
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
      }     

      // create
      var futureForecastsContainer = document.querySelector("#futureForecast")

      var fiveDayForeDay1Card = document.createElement("div")
      var fiveDayForeDay2Card = document.createElement("div")
      var fiveDayForeDay3Card = document.createElement("div")
      var fiveDayForeDay4Card = document.createElement("div")
      var fiveDayForeDay5Card = document.createElement("div")

      iconEl = document.createElement("img")
      iconDay1 = document.createElement("img")
      iconDay2 = document.createElement("img")
      iconDay3 = document.createElement("img")
      iconDay4 = document.createElement("img")
      iconDay5 = document.createElement("img")

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
     
      var humDay1 = document.createElement("h6")
      var humDay2 = document.createElement("h6")
      var humDay3 = document.createElement("h6")
      var humDay4 = document.createElement("h6")
      var humDay5 = document.createElement("h6")
      
      iconEl = document.createElement('img')
      iconElDay1 = document.createElement('img')
      iconElDay2 = document.createElement('img')
      iconElDay3 = document.createElement('img')
      iconElDay4 = document.createElement('img')
      iconElDay5 = document.createElement('img')
      
      var cityNameEl = document.createElement("p");
      var currentTempEl = document.createElement("p");
      var currentWindEl = document.createElement("p");
      var currentHumidityEl = document.createElement("p");
      // modify

      // futureForecastsContainer.setAttribute("id", "futureForecasts");
      fiveDayForeDay1Card.setAttribute("class", "cards");
      fiveDayForeDay2Card.setAttribute("class", "cards");
      fiveDayForeDay3Card.setAttribute("class", "cards");
      fiveDayForeDay4Card.setAttribute("class", "cards");
      fiveDayForeDay5Card.setAttribute("class", "cards");

      tempDay1.textContent = "Temp: " + Math.floor((data.list[7].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay2.textContent = "Temp: " + Math.floor((data.list[15].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay3.textContent = "Temp: " + Math.floor((data.list[23].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay4.textContent = "Temp: " + Math.floor((data.list[31].main.temp - 273.15) * 1.8 + 32) + "°F";
      tempDay5.textContent = "Temp: " + Math.floor((data.list[39].main.temp - 273.15) * 1.8 + 32) + "°F";

      windDay1.textContent = "Wind: " + data.list[7].wind.speed   + " MPH";
      windDay2.textContent = "Wind: " + data.list[15].wind.speed  + " MPH";
      windDay3.textContent = "Wind: " + data.list[23].wind.speed  + " MPH";
      windDay4.textContent = "Wind: " + data.list[31].wind.speed  + " MPH";
      windDay5.textContent = "Wind: " + data.list[39].wind.speed  + " MPH";
     
      humDay1.textContent = "Humidity: " + data.list[7].main.humidity   + " %";
      humDay2.textContent = "Humidity: " + data.list[15].main.humidity  + " %";
      humDay3.textContent = "Humidity: " + data.list[23].main.humidity  + " %";
      humDay4.textContent = "Humidity: " + data.list[31].main.humidity  + " %";
      humDay5.textContent = "Humidity: " + data.list[39].main.humidity  + " %";

      cityNameEl.textContent = data.city.name 
      currentTempEl.textContent = "Temp: " + Math.floor((data.list[0].main.temp - 273.15) * 1.8 + 32) + "°F";
      currentWindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";
      
      currentWindEl.textContent = "Wind: " + data.list[0].wind.speed + " MPH";
      currentHumidityEl.textContent = "Humidity: " + data.list[0].main.humidity + "%";
     
      cityNameEl.setAttribute("style", "font-size:25px");
      currentTempEl.setAttribute("style", "font-size:25px");

      futureForecastsContainer.setAttribute("style", "display:flex");
      currentWindEl.setAttribute("style", "font-size:25px");
      currentHumidityEl.setAttribute("style", "font-size:25px");
      
      iconLink = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
      iconLinkDay1 = "http://openweathermap.org/img/w/" + data.list[7].weather[0].icon + ".png";
      iconLinkDay2 = "http://openweathermap.org/img/w/" + data.list[15].weather[0].icon + ".png";
      iconLinkDay3 = "http://openweathermap.org/img/w/" + data.list[23].weather[0].icon + ".png";
      iconLinkDay4 = "http://openweathermap.org/img/w/" + data.list[31].weather[0].icon + ".png";
      iconLinkDay5 = "http://openweathermap.org/img/w/" + data.list[39].weather[0].icon + ".png";

      iconEl.setAttribute("src", iconLink)
      iconElDay1.setAttribute("src", iconLinkDay1)
      iconElDay2.setAttribute("src", iconLinkDay2)
      iconElDay3.setAttribute("src", iconLinkDay3)
      iconElDay4.setAttribute("src", iconLinkDay4)
      iconElDay5.setAttribute("src", iconLinkDay5)

      
      // append
      
      document.body.children[1].children[1].append(iconEl)
      fiveDayForeDay1Card.appendChild(iconElDay1);
      fiveDayForeDay2Card.appendChild(iconElDay2);
      fiveDayForeDay3Card.appendChild(iconElDay3);
      fiveDayForeDay4Card.appendChild(iconElDay4);
      fiveDayForeDay5Card.appendChild(iconElDay5);


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
      
      fiveDayForeDay1Card.appendChild(humDay1);
      fiveDayForeDay2Card.appendChild(humDay2);
      fiveDayForeDay3Card.appendChild(humDay3);
      fiveDayForeDay4Card.appendChild(humDay4);
      fiveDayForeDay5Card.appendChild(humDay5);

      document.body.children[1].children[1].appendChild(cityNameEl);
      document.body.children[1].children[1].appendChild(currentTempEl);
      document.body.children[1].children[1].appendChild(currentWindEl);
      document.body.children[1].children[1].appendChild(currentHumidityEl);
      
      
      // console.log(currentTempEl, currentWindEl, currentHumidityEl);
    });
}
// getPlace();

var getForecast = document.querySelector("#getForecast");
getForecast.addEventListener("click", getValue);
