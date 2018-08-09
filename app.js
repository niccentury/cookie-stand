'use strict'

console.log('js loaded');

var local = ['<th>First and Pike</th>', '<th>SeaTac Airport</th>', '<th>Seattle Center</th>', '<th>Capitol Hill', '<th>Alki</th>'];
var hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ", "6pm: ", "7pm: ", "8pm: "];

//Funtion to generate a random nuber
function getRandomIntInclusive() {
  var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  return randFunct;
}

//Pushes that randon number into an array
function getAvgCookPerHour() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
    this.randPerHour.push(hourlyCustSale);
    // console.log(this.randPerHour)
  }
  return this.randPerHour;

}
//The maximum is inclusive and the minimum is inclusive 

function Locations(location, minCust, maxCust, avgCookSale) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookSale = avgCookSale;
  this.randPerHour = [];
}

Locations.prototype.getRandomIntInclusive = getRandomIntInclusive;
Locations.prototype.getAvgCookPerHour = getAvgCookPerHour;
// Location Objects with all related keys

var firstAndPike = new Locations(local[0], 23, 65, 6.3);
var seaTacAirport = new Locations(local[1], 3, 24, 1.2);
var seattleCenter = new Locations(local[2], 11, 34, 3.7);
var capitolHill = new Locations(local[3], 20, 38, 2.3);
var alki = new Locations(local[4], 2, 16, 4.6);
console.log(firstAndPike);

var objectArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki]

//Function to fill in custructor with actuals
function fillTable(storeData) {
  var locationData = document.getElementById('tableCell');
  var totalCooks = 0;
  var tableData = document.createElement('tr');
  tableData.innerHTML = storeData.location;
  locationData.appendChild(tableData);
  for (var i = 0; i < (storeData.randPerHour.length); i++) {
    var cookData = document.createElement('td');
    cookData.textContent = storeData.randPerHour[i];
    tableData.appendChild(cookData);
    totalCooks += storeData.randPerHour[i];
  }
  var dailyTotal = document.createElement('td');
  dailyTotal.textContent = totalCooks;
 tableData.appendChild(dailyTotal);
}

// function totalHourly(storeTotal){
//   for (i = 0; i < 16; i++){
//     storeTotal.randPerHour[i]; i++
//   }
// }

//Call vars necessary to execute functions
firstAndPike.getAvgCookPerHour();
seaTacAirport.getAvgCookPerHour();
seattleCenter.getAvgCookPerHour();
capitolHill.getAvgCookPerHour();
alki.getAvgCookPerHour();
fillTable(firstAndPike);
fillTable(seaTacAirport);
fillTable(seattleCenter);
fillTable(capitolHill);
fillTable(alki);

