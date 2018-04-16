// Write your JavaScript code here!

var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
];


let planetsElm = document.getElementById("planets");
let calcBtn = document.getElementById("calculate-button");
let checkBox = document.getElementById("pluto");
let clear = document.getElementById("clear-button");
let outputText = document.getElementById("output");
var plutoID = planets[0][0]; //grabs 'Pluto'
var sunID = planets[10];


function populateOptions() {
        //let index = 0;
        planets.reverse().forEach(function ([planetName]) {
        let optionElm = document.createElement("option");
        optionElm.value = planetName;
        optionElm.innerText = planetName;
        planetsElm.appendChild(optionElm);
    });
}

populateOptions();

function calculateWeight(userWeight, selectedPlanet) {

    // var userWeight = document.getElementById("user-weight").value;
    // var selectedPlanet = planetsElm.options[planetsElm.selectedIndex].value;
    for (var i=0; i < planets.length;i++) {
        var planetInfo = planets[i];
            // for (i=0; i < planets.length; i++) {
            //     if (selectedPlanet === planets[i][0]) {
            //    console.log(planets[i][1]);
            // } 
        if (planetInfo[0] === selectedPlanet) {
            var weightFactor = planetInfo[1];
        }
        
        if (selectedPlanet === "Sun") {
            console.log("SUNTEXT")
            outputText.innerHTML = "(And you'd be dead)";
        }
        

    }

    var result = userWeight * weightFactor;
    outputText.innerHTML = "If you were on " + selectedPlanet + ", you would weigh " + result + "lbs!";

}

function hidePluto() {
    if (document.getElementById("pluto").checked === true) {
        planetsElm.lastChild.style.display="none";
        // works planetsElm.childNodes[10].style.display="none";
        //test 1 planetsElm.removeChild(planetsElm.childNodes[0][0]);
        //test 2 planetsElm.parentNode.removeChild(planetsElm);
        //test 3 document.getElementById("planets").parentNode.removeChild(document.getElementByID('pluto'));
    } else if (document.getElementById("pluto").checked === false) {
        planetsElm.lastChild.style.display="block"
    }

}

function clearText(){
    outputText.innerHTML = "<br/>";
    document.getElementById("user-weight").value = "";

    clicks();
}

var clickCount = 0;
function clicks() {
    clickCount += 1;
    console.log(clickCount);
    
    if (clickCount === 5) {
    var tableFlip = document.getElementById("tableFlip").style.visibility="visible";
    } else if (clickCount === 8) {
        tableFlip = document.getElementById("tableFlip").style.opacity=".4";
        document.getElementById("output").innerHTML = "Enjoying yourself?"
    } else if (clickCount === 11) {
        tableFlip = document.getElementById("tableFlip").style.opacity=".6";
    } else if (clickCount === 14) {
        tableFlip = document.getElementById("tableFlip").style.opacity=".8";$
    } else if (clickCount >= 20) {
        tableFlip = document.getElementById("tableFlip").style.opacity="1";
        document.getElementById("output").innerHTML = "Refresh the page to start again."
    }
}

function handleClickEvent(e) {
    var userWeight = document.getElementById("user-weight").value;
    var selectedPlanet = planetsElm.options[planetsElm.selectedIndex].value;
    // console.log("User's weight is:", userWeight);
    // console.log("Selected planet is:", selectedPlanet);


    calculateWeight(userWeight, selectedPlanet);
}



calcBtn.addEventListener("click", handleClickEvent);
checkBox.addEventListener("click", hidePluto);
clear.addEventListener("click", clearText);