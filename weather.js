//sample Zip code link from open weather //https://samples.openweathermap.org/data/2.5/weather?zip=94040,us&appid=b6907d289e10d714a6e88b30761fae22

//This link below works
//https://api.openweathermap.org/data/2.5/weather?zip=53560,us&appid=872004b8bf62ae043b25b98a2189e4ec

//api key: 872004b8bf62ae043b25b98a2189e4ec

$("#search_btn").click(function() {
    
   //variable for the OpenWeather API URL
    var apiLink = 'https://api.openweathermap.org/data/2.5/weather';
    var apiKey = '872004b8bf62ae043b25b98a2189e4ec';
    var zipInput = $('#inputPassword2').val();
    var apiURL = apiLink + '?zip=' zipInput + '&appid=' + apiKey;
    
    console.log(apiURL);
    
    $.get(apiURL, function(responseFromOW) {
        console.log(responseFromOW);
        console.log("temp:", responseFromOW.main.temp);
        console.log("city:", responseFromOW.name);
        console.log("condition:", responseFromOW.weather[0].description);
    });
    
});
