console.log
var cityName = document.getElementById("city");
var stateCode = document.getElementById("state");
var countryCode = document.getElementById("country");
var getForecast = document.querySelector("#getForecast")

// create


// modify
// append

// 338ceedf83a992ffd42dcc24175384c9
// '+'#city'+'#state'+'#country'+'

// city = '';
// state = '';
// country = '';

function getPlace(city, state, country){
  // city = cityName.value;
  // state = stateCode.value;
  // country = countryCode.value;
  // console.log(cityName.value + ',' + stateCode.value + ',' + countryCode.value)
  // console.log(city, state, country)
  return city + ',' + state + ',' + country;
}

function fetchAPI (){
  var cityText = cityName.value;
  var stateText = stateCode.value;
  var countryText = countryCode.value;
var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ getPlace(cityText, stateText, countryText) +'&appid=338ceedf83a992ffd42dcc24175384c9';
// var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q='+ city + ',' + state + ',' + country + '&appid=338ceedf83a992ffd42dcc24175384c9';
// var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=338ceedf83a992ffd42dcc24175384c9`;
fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log('Github Repo Issues \n----------');
    console.log(data);
    for( var i = 0; i < data.length ; i++){
      // console.log("url: " + data[i].url + " login: " + data[i].user.login)
    }console.log(data[i])
    // TODO: Loop through the response
    // TODO: Console log each issue's URL and each user's login
  });
}  
  getPlace()

getForecast.addEventListener("click", fetchAPI)