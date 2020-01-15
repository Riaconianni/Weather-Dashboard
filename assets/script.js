var $searchForm = $("#search-form");
var $searchInput = $("#search-input");
var $searchedCities = $("#searched-cities");
var $cityResults = $("#city-results");

var cities = [];

function printArr(weatherArr, cityName) {
  for (var i = 0; i < weatherArr.length; i++) {
    console.log(cityName);
    console.log(weatherArr);

    var $card = $('<div>').addClass('card bg-light text-dark mb-3');

    var $cardBody = $('<div>').addClass('card-body');
    $cardBody
      .append(`<p>Temperature (F): ${weatherArr[i].main.temp}</p>`)
      .append(`<p>Weather: ${weatherArr[i].weather[0].main}</p>`)
      .append(`<p>Wind: ${weatherArr[i].wind.speed}</p>`);

      $card.append($cardBody);

      $cityResults.append($card);
  }
$(".city").html("<h1>" + cityName + "</h1>");
}

function handleFormSubmit(event) {
  event.preventDefault();

  // read value from search input
  var searchTerm = $searchInput.val();

  // check and make sure that searchTerm has a value
  if (!searchTerm) {
    return false;
  }

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=58044ceb57e67f25a86502f8ce4be039&units=imperial`;

  // make our search with AJAX
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    var fiveDayArr = response.list.filter(function(weatherObj) {
      if (weatherObj.dt_txt.includes('06:00:00')) {
        return true;
      }
      else {
        return false;
      };
      
    });

    printArr(fiveDayArr, response.city.name);
  });
}

    // $(".description").text(
    //   "Weather: " + response.weather[0].description
    // );
    // $(".humidity").text("Humidity: " + response.main.humidity);

    // $(".wind").text("Wind Speed: " + response.wind.speed);
$searchForm.on("submit", handleFormSubmit);