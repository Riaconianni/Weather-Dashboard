var $searchForm = $("#search-form");
var $searchInput = $("#search-input");
var $searchedCities = $("#searched-cities");
var $cityResults = $("#city-results");

var cities = [];

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

    function printArr(weatherArr) {
      for (var i = 0; i < weatherArr.length; i++) {
        console.log(weatherArr);
      }
      printArr(weatherArr);
    }
  });
}
    
    // $(".city").html("<h1>" + response.city.name + "</h1>");
    // $(".description").text(
    //   "Weather: " + response.weather[0].description
    // );
    // $(".humidity").text("Humidity: " + response.main.humidity);
    // $(".temp").text("Temperature (F): " + response.main.temp);
    // $(".wind").text("Wind Speed: " + response.wind.speed);
$searchForm.on("submit", handleFormSubmit);