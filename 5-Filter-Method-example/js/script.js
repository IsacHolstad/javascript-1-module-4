// Filter method Example

// Example 1 Filter Method with Static Data

//1. i want to import the data
import teams from "./data/teams.js";
//console.log(teams);

//1. select the team contaienr class
//2. selecth the search class

const teamContainer = document.querySelector(".team-container");
const search = document.querySelector(".search");
//4. assign the teams data to a variabel 

let teamsToRender = teams;
//5. loop on the teams array and inject data to the dom teamcontainer

//"sidenote" you can use j and i in the forloop its the same
function renderTeams(someArr) {
    // clear the contaienr
    teamContainer.innerHTML = "";
    for(let j = 0; j < someArr.length; j++) {
        //console.log(teamsToRender[j]);
        teamContainer.innerHTML += `<div class="team"><h3>${someArr[j].full_name}</h3></div>`
    }

}
renderTeams(teamsToRender)

//6. wrap this forloop in a function the nwe use it

//7. i want to detect that i wrote something (text) inside the input

search.onkeyup = function(event) {
    console.log(event)
// 8. get the search value or the search keyword for the user
    console.log(event.target.value);
    const searchValue = event.target.value.trim().toLowerCase();
    console.log('search value ', searchValue)


    const filteredteams = teamsToRender.filter(function(team){
        //check if any of the full_name starts with the search value
        if(team.full_name.toLowerCase().startsWith(searchValue)) {
            return true;

        }

    });
    console.log(filteredteams)
    //assign the filter the old array to the new one
    //teamsToRender = filteredteams;
    console.log("teams to render: ", filteredteams)
    renderTeams(filteredteams);
}
//last thing i did wast fixing it where you remove the text in searchbar you go back where it showes tall the results