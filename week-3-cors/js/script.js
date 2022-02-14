//example 1

const url = "https://elephant-api.herokuapp.com/elephants";
//this is my proxy server
const proxy = "https://noroffcors.herokuapp.com/";
const corsFixUrl = proxy + url;
async function makeApiCall() {
    try{
        const response = await fetch(corsFixUrl);
        //convert the response to be json data
        const elephantsData = await response.json()
        console.log(elephantsData)
        resultsContainer.innerHTML = aler("succes", "hey your api call is succesful");

    } catch (e) {
        console.log(e)
        resultsContainer.innerHTML = alert("error", e)
    }
}

makeApiCall().then()