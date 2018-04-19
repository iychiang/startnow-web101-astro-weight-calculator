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
    ['The Sun', 27.9]
];


let planetsElm = document.getElementById("planets");
let calcBtn = document.getElementById("calculate-button");
let checkBox = document.getElementById("pluto");
let clear = document.getElementById("clear-button");
let outputText = document.getElementById("output");
var plutoID = planets[0][0]; //grabs 'Pluto'

function populateOptions() {
    planets.reverse().forEach(function ([planetName]) {
        let optionElm = document.createElement("option");
        optionElm.innerText = planetName;
        planetsElm.appendChild(optionElm);
    });
}

populateOptions();

function calculateWeight(userWeight, selectedPlanet) {
    for (var i = 0; i < planets.length; i++) {
        var planetInfo = planets[i];

        if (planetInfo[0] === selectedPlanet) {
            var weightFactor = planetInfo[1];
        };
    }

    var result = (userWeight * weightFactor);
    outputText.innerHTML = "If you were on " + selectedPlanet + ", you would weigh " + result.toLocaleString() + " lbs!";
    
    if (selectedPlanet === planets[0][0]) { //planets[0] is Sun due to .reverse
        outputText.innerHTML = "If you were on the Sun, you'd be " + result.toLocaleString() + " lbs but you'd also be dead!";
    };
}

function hidePluto() {
    if (document.getElementById("pluto").checked === true) {
        planetsElm.lastChild.style.display = "none";
        // works planetsElm.childNodes[10].style.display="none";
    } else {
        planetsElm.lastChild.style.display = "block"
    };
}

function clearText() {
    outputText.innerHTML = "<br/>";
    document.getElementById("user-weight").value = "";
    clicks();
}

var clickCount = 0;

function clicks() {
    clickCount += 1;
    console.log(clickCount);

    if (clickCount === 5) {
        var tableFlip = document.getElementById("tableFlip").style.visibility = "visible";
    } else if (clickCount === 8) {
        tableFlip = document.getElementById("tableFlip").style.opacity = ".4";
        document.getElementById("output").innerHTML = "Enjoying yourself?"
    } else if (clickCount === 11) {
        tableFlip = document.getElementById("tableFlip").style.opacity = ".6";
    } else if (clickCount === 14) {
        tableFlip = document.getElementById("tableFlip").style.opacity = ".8";
    } else if (clickCount >= 17) {
        tableFlip = document.getElementById("tableFlip").style.opacity = "1";
        document.getElementById("output").innerHTML = "Refresh the page to start again."
    }
}

function handleClickEvent() {
    var userWeight = document.getElementById("user-weight").value;
    var selectedPlanet = planetsElm.options[planetsElm.selectedIndex].value;

    calculateWeight(userWeight, selectedPlanet);
}

calcBtn.addEventListener("click", handleClickEvent);
checkBox.addEventListener("click", hidePluto);
clear.addEventListener("click", clearText);