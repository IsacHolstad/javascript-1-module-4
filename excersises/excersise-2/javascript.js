// 1. create a variabel and assign it to the endpoint url, call it randomeuserURL
const randomeuserURL = "https://randomuser.me/api/"

//console.log(randomeuserURL);


// 2. select the wraper div
const wraperDiv = document.querySelector(".wrapper");

// 3. make api call

fetch(randomeuserURL)
    .then(function(response){
        //const responseJSON = response.json();
        //console.log("response: ", responseJSON);
        return response.json();

    }).then(function(jsonData) {
        //console.log(jsonData.results);
        const results = jsonData.results;
        for(let i = 0; i < results.length; i++) {
            //console.log(results[i]);
            
            const firstName = results[i].name.first;
            const lastName = results[i].name.last;
            const personImg = results[i].picture.large;
            //console.log(firstName)
            //console.log(lastName)
            //console.log(personImg)
            wraperDiv.innerHTML += `
            <h1>${firstName} ${lastName}</h1>
            <img src="${personImg}" alt="a picture of the person"/>`
    
           
        }
    })
    .catch(function (error){
        console.log("error")
    })
    
