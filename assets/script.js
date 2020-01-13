  var $searchTerm = $("#search-input");

  // put together our query url
  var queryUrl = `api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=58044ceb57e67f25a86502f8ce4be039`;

  // make our search with AJAX
  $.ajax({
    url: queryUrl,
    method: 'GET'
  }).then(function(weatherResponse) {
    console.log(weatherResponse);
    
  });


