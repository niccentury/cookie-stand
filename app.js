'use strict'

console.log('js loaded');

var local = ['First and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ", "6pm: ", "7pm: ", "8pm: ", "Total: "];

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

//Function to fill in custructor with actual 
function fillTable(storeData, htmlLink) {
  var locationData = document.getElementById(htmlLink);
  var totalCooks = 0;
  for (var i = 0; i < (storeData.randPerHour.length); i++) {
    console.log('Hi', i, storeData.randPerHour[i]);
    var tableData = document.createElement('td');
    var cookData = document.createTextNode(storeData.randPerHour[i]);
    tableData.appendChild(cookData);
    locationData.appendChild(tableData);
    totalCooks += storeData.randPerHour[i];
  }

  var dailyTotal = document.createElement('td');
  var finalTotal = document.createTextNode(totalCooks);
  dailyTotal.appendChild(finalTotal);
  locationData.appendChild(dailyTotal);
}

//Call vars necessary to execute functions
firstAndPike.getAvgCookPerHour();
seaTacAirport.getAvgCookPerHour();
seattleCenter.getAvgCookPerHour();
capitolHill.getAvgCookPerHour();
alki.getAvgCookPerHour();
fillTable(firstAndPike, 'pike');
fillTable(seaTacAirport, 'seaTac');
fillTable(seattleCenter, 'seaCent');
fillTable(capitolHill, 'capHill');
fillTable(alki, 'alki');

