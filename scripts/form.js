/*
Helper functions to hide and 
show form for API key input 
if key has been previously 
provided or not
*/

function displayForm() {
    document.getElementById("api_key_form").style.visibility = "visible";
    document.querySelector("main").style.visibility = "hidden";
}

function hideForm() {
    document.getElementById("api_key_form").style.visibility = "hidden";
    document.querySelector("main").style.visibility = "visible";
}