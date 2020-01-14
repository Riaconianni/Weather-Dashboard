var $searchForm = $("#search-form");
var $searchInput = $("#search-input");
var $searchedCities = $("#searched-cities");

function handleFormSubmit(event) {
  event.preventDefault();

  // read value from search input
  var searchTerm = $searchInput.val();

  // check and make sure that searchTerm has a value
  if (!searchTerm) {
    return false;
  }

  var queryURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=58044ceb57e67f25a86502f8ce4be039&units=imperial`;

  // make our search with AJAX
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);

    $(".city").html("<h1>" + response.name + "</h1>");
    $(".description").text(
      "Weather: " + response.weather[0].description
    );
    $(".humidity").text("Humidity: " + response.main.humidity);
    $(".temp").text("Temperature (F): " + response.main.temp);
    $(".wind").text("Wind Speed: " + response.wind.speed);
  });
  
}

function handleCitySearchedSubmit(event) {
  event.preventDefault();

  var cities = $searchInput.val();

  localStorage.setItem(cities, "cities");

  localStorage.getItem(cities);

  $searchedCities.append(cities);

  console.log(cities);

};

$searchForm.on("submit", handleFormSubmit);
$searchedCities.on("submit", handleCitySearchedSubmit);
