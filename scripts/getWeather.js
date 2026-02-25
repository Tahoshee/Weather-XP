/* 
Script to obtain weather from OpenWeather API
for a given location. OpenWeather API key
required and script will only execute once
provided.
*/ 

// Obtain weather from OpenWeather API


function getWeather(item) {
    
    console.log(item["api_key"]);

        // Create new XMLHTTP request
        var xhttp = new XMLHttpRequest();

        xhttp.onload = function() {

            // Convert API response to JSON and store in object
            var data = JSON.parse(xhttp.responseText);
        
            // Populate fields with API data
            document.querySelector("p").innerHTML = data.main.temp;
        };
        
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${item["api_key"]}`;
        xhttp.open("GET", url, true );
        xhttp.send();
};