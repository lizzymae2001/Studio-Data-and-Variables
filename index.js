// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';

const input = require ('readline-sync');
let astronautCount = Number(input.question("Enter the astronaut count: "));


let astronautStatus = (input.question ("Enter astronaut status: "));

let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = '100%';

let weatherStatus = (input.question ("Enter weather status: "));

dottedLine = "-------------------------------------"


// Write code to generate the LC04 report here:
console.log (dottedLine);
console.log ("> LC04 - LAUNCH CHECKLIST");
console.log (dottedLine);

console.log ("Date: " + date);
console.log ("Time: " + time, "\n");

console.log (dottedLine);
console.log ("> ASTRONAUT INFO");
console.log (dottedLine);

console.log ("* count: " + astronautCount);
console.log ("* status: " + astronautStatus, "\n");

console.log (dottedLine);
console.log ("> FUEL DATA");
console.log (dottedLine);

console.log ("* Fuel temp celsius: " + fuelTempCelsius + " C");
console.log ("* Fuel level: " + fuelLevel, "\n");

console.log (dottedLine);
console.log ("> MASS DATA");
console.log (dottedLine);

console.log ("* Crew mass: " + crewMassKg + " kg");
console.log ("* Fuel mass: " + fuelMassKg + " kg");
console.log ("* Shuttle mass: " + shuttleMassKg + " kg");
console.log ("* Total mass: " + totalMassKg + " kg" + "\n");

console.log (dottedLine);
console.log ("> FLIGHT PLAN");
console.log (dottedLine);

console.log ("* weather: " + weatherStatus + "\n");

console.log (dottedLine);
console.log ("> OVERALL STATUS");
console.log (dottedLine);


if ((astronautStatus === "ready") && (astronautCount >= 7) && (weatherStatus === "clear")) {
 console.log ("* Clear for takeoff: YES") 
 } else {
   console.log ("* Clear for takeoff: NO");
 }



// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
