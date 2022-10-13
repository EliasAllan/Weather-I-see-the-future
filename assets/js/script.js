var requestUrl = 'https://api.openweathermap.org/data/3.0/onecall?lat=39.7445&lon=-77.0880&appid=338ceedf83a992ffd42dcc24175384c9';
// 39.7445
// -77.0880
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
  