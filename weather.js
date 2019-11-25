//sample Zip code link from open weather //https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//This link below works
//https://api.openweathermap.org/data/2.5/weather?zip=53560,us&appid=872004b8bf62ae043b25b98a2189e4ec

//api key: 872004b8bf62ae043b25b98a2189e4ec

$("#search_btn").click(function() {
    
   //variable for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '872004b8bf62ae043b25b98a2189e4ec';
    var apiUnits = '&units=imperial';
    var zipInput = $('#inputPassword2').val();
    var apiURL = apiLink + '?zip=' + zipInput + '&appid=' + apiKey + apiUnits;
    var clearSky = "<img src='/'>"
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW) {
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
        
        var temp = responseFromOW.main.temp_max;
        var city = responseFromOW.name;
        var description = responseFromOW.weather[0].description;
            
        
        $('#city').html(responseFromOW.name);
        $('#temp').html(temp + 'º')
        $('#description').html(description);
        
        
if (responseFromOW.weather[0].main === "Clouds") {
            $('#weather_background').css('background-image', "url(images/cloudy.jpg)");
        } else if (responseFromOW.weather[0].main === "Clear") {
            $('#weather_background').css('background-image', "url(images/clear_day.jpg)");
        } else if (responseFromOW.weather[0].main === "Thunderstorm") {
            $('#weather_background').css('background-image', "url(images/thunderstorm.jpg)");
        } else if (responseFromOW.weather[0].main === "Drizzle") {
            $('#weather_background').css('background-image', "url(images/sleet.jpg)");
        } else if (responseFromOW.weather[0].main === "Rain") {
            $('#weather_background').css('background-image', "url(images/rain.jpg)");
        } else if (responseFromOW.weather[0].main === "Snow") {
            $('#weather_background').css('background-image', "url(images/snow.jpg)");
        } else if (responseFromOW.weather[0].main === "Mist") {
            $('#weather_background').css('background-image', "url(images/fog.jpg)");
        } else if (responseFromOW.weather[0].main === "Haze") {
            $('#weather_background').css('background-image', "url(images/fog.jpg)");
        } else if (responseFromOW.weather[0].main === "Fog") {
            $('#weather_background').css('background-image', "url(images/fog.jpg)");
        } else if (responseFromOW.weather[0].main === "Tornado") {
            $('#weather_background').css('background-image', "url(images/tornado.jpg)");
        }  
         
    });
    
});
