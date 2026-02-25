/*
Script for handling OpenWeather API key.
Checks if API key provided, if so weather
is obtained using getWeather.js, if not 
form is displayed asking user to provide
API key.
*/

document.addEventListener("DOMContentLoaded", function() {
    
    // Checks API key provided
    async function checkApiKey() {

        // Attempts to obtain key from browser local storage
        let gettingItem = await browser.storage.local.get("api_key");

        // If key is found:
        if (gettingItem.api_key) {

            // Form is hidden
            hideForm();

            // getWeather function is called to populate HTML
            // with weather information
            getWeather(gettingItem);
        }
        else {

            // Otherwise form is shown asking user to provide
            // API key
            displayForm();
        }
    }

    // Listens for form submission
    document.querySelector("form").addEventListener("submit", function(event) {

        // Stores API key in browser local storage
        browser.storage.local.set({"api_key": document.getElementById("api_key").value});

        // Obtains API key using check function
        checkApiKey();

        // Prevent form submission
        event.preventDefault();
    });

    // Check function called to start program
    checkApiKey();
}); 