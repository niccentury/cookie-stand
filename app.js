'use strict'

console.log('js loaded');

var local = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki]
var hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ", "6pm: ", "7pm: ", "8pm: ", "Total: "];

//Funtion to generate a random nuber
function getRandomIntInclusive() {
  var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  return randFunct;
}

//Pushes that randon number into an array
function getAvgCookPerHour1() {
  for (var i = 0; i < hours.length; i++) {
    var hourlyCustSale = Math.floor(this.addInfo() * this.avgCookSale);
    this.randPerHour.push(hourlyCustSale);
    // console.log(this.randPerHour)
  }
  return this.randPerHour;

}
//The maximum is inclusive and the minimum is inclusive 

function Locations(minCust, maxCust, avgCookSale) {
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookSale = avgCookSale;
  this.randPerHour = [];
}

Locations.prototype.addInfo = getRandomIntInclusive;
Locations.prototype.pushCookArray = getAvgCookPerHour1
// Location Objects with all related keys

var firstAndPike = new Locations(23, 65, 6.3);
var seaTacAirport = new Locations(3, 24, 1.2);
var seattleCenter = new Locations(11, 34, 3.7);
var capitolHill = new Locations(20, 38, 2.3);
var alki = new Locations(2, 16, 4.6);




firstAndPike.pushCookArray();

function fillTable(StoreData, htmlLink) {
  var locationData = document.getElementById(htmlLink);
  var totalCooks = 0
for (var i = 0; i < storeData.randPerHour.length; i++) {
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

//seaTacAirport table fucntion
seaTacAirport.pushCookArray();

var locationData = document.getElementById('seaTac');
var totalCooks = 0
for (var i = 0; i < seaTacAirport.randPerHour.length; i++) {
  console.log('Hi', i, seaTacAirport.randPerHour[i]);
  var tableData = document.createElement('td');
  var cookData = document.createTextNode(seaTacAirport.randPerHour[i]);
  tableData.appendChild(cookData);
  locationData.appendChild(tableData);
  totalCooks += seaTacAirport.randPerHour[i];
}

var dailyTotal = document.createElement('td');
var finalTotal = document.createTextNode(totalCooks);
dailyTotal.appendChild(finalTotal);
locationData.appendChild(dailyTotal);


seaTacAirport.getAvgCookPerHour;

//seattleCenter table function
seattleCenter.pushCookArray();

var locationData = document.getElementById('seaCent');
var totalCooks = 0
for (var i = 0; i < seattleCenter.randPerHour.length; i++) {
  console.log('Hi', i, seattleCenter.randPerHour[i]);
  var tableData = document.createElement('td');
  var cookData = document.createTextNode(seattleCenter.randPerHour[i]);
  tableData.appendChild(cookData);
  locationData.appendChild(tableData);
  totalCooks += seattleCenter.randPerHour[i];
}

var dailyTotal = document.createElement('td');
var finalTotal = document.createTextNode(totalCooks);
dailyTotal.appendChild(finalTotal);
locationData.appendChild(dailyTotal);

//Capitol Hill table Function
capitolHill.pushCookArray();

var locationData = document.getElementById('capHill');
var totalCooks = 0
for (var i = 0; i < capitolHill.randPerHour.length; i++) {
  console.log('Hi', i, capitolHill.randPerHour[i]);
  var tableData = document.createElement('td');
  var cookData = document.createTextNode(capitolHill.randPerHour[i]);
  tableData.appendChild(cookData);
  locationData.appendChild(tableData);
  totalCooks += capitolHill.randPerHour[i];
  }

  var dailyTotal = document.createElement('td');
  var finalTotal = document.createTextNode(totalCooks); 
  dailyTotal.appendChild(finalTotal);
  locationData.appendChild(dailyTotal);

  //Alki table function
  alki.pushCookArray();

var locationData = document.getElementById('alki');
var totalCooks = 0
for (var i = 0; i < alki.randPerHour.length; i++) {
  if(i === 0){

  }
  console.log('Hi', i, alki.randPerHour[i]);
  var tableData = document.createElement('td');
  var cookData = document.createTextNode(alki.randPerHour[i]);
  tableData.appendChild(cookData);
  locationData.appendChild(tableData);
  totalCooks += alki.randPerHour[i];
 

  }

  var dailyTotal = document.createElement('td');
  var finalTotal = document.createTextNode(totalCooks); 
  dailyTotal.appendChild(finalTotal);
  locationData.appendChild(dailyTotal);



//   getRandomIntInclusive: function () {
//     var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return randFunct;
//     //The maximum is inclusive and the minimum is inclusive 
//   },
//   getAvgCookPerHour3: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
//       this.randPerHour.push(hourlyCustSale);
//     }
//     return this.randPerHour;
//   }
// }
// seattleCenter.getAvgCookPerHour3();
// var locationData = document.getElementById('seaCenter');
// var totalCooks = 0
// for (var i = 0; i <= seattleCenter.randPerHour.length; i++) {
//   while (i < seattleCenter.randPerHour.length) {
//     var locationLi = document.createElement('li');
//     totalCooks += seattleCenter.randPerHour[i]
//     locationLi.textContent = hours[i] + seattleCenter.randPerHour[i] + " cookies";
//     locationData.appendChild(locationLi);
//     i++
//   }
//   locationLi.textContent = "Total: " + totalCooks + " cookies"
//   locationData.appendChild(locationLi)
// }
// console.log(locationData);
// console.log(seattleCenter.getAvgCookPerHour3());
// console.log("for some reason there are arrays with 32/34 items showing... check this later")

// var capitolHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookSale: 2.3,
//   randPerHour: [],

//   getRandomIntInclusive: function () {
//     var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return randFunct;
//     //The maximum is inclusive and the minimum is inclusive 
//   },
//   getAvgCookPerHour4: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
//       this.randPerHour.push(hourlyCustSale);
//     }
//     return this.randPerHour;
//   }
// }
// capitolHill.getAvgCookPerHour4();
// var locationData = document.getElementById('capHill');
// var totalCooks = 0;
// for (var i = 0; i <= capitolHill.randPerHour.length; i++) {
//   while (i < capitolHill.randPerHour.length) {
//     var locationLi = document.createElement('li');
//     totalCooks += capitolHill.randPerHour[i];
//     locationLi.textContent = hours[i] + capitolHill.randPerHour[i] + " cookies";
//     locationData.appendChild(locationLi);
//     i++;
//   }
//   locationLi.textContent = "Total: " + totalCooks + " cookies";
//   locationData.appendChild(locationLi);
// }
// console.log(locationData);
// console.log(capitolHill.getAvgCookPerHour4());
// console.log("for some reason there are arrays with 32/34 items showing... check this later")

// var alki = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookSale: 4.6,
//   randPerHour: [],

//   getRandomIntInclusive: function () {
//     var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
//     return randFunct;
//     //The maximum is inclusive and the minimum is inclusive 
//   },
//   getAvgCookPerHour5: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
//       this.randPerHour.push(hourlyCustSale);
//     }
//     return this.randPerHour;
//   }
// }

// alki.getAvgCookPerHour5();
// var locationData = document.getElementById('alki');
// var totalCooks = 0
// for (var i = 0; i <= alki.randPerHour.length; i++) {
//   while (i < alki.randPerHour.length) {
//     var locationLi = document.createElement('li');
//     totalCooks += alki.randPerHour[i]
//     locationLi.textContent = hours[i] + alki.randPerHour[i] + " cookies";
//     locationData.appendChild(locationLi);
//     i++
//   }
//   locationLi.textContent = "Total: " + totalCooks + " cookies"
//   locationData.appendChild(locationLi)
// }
// console.log(locationData);
// console.log(alki.getAvgCookPerHour5());
// console.log("for some reason there are arrays with 32/34 items showing... check this later")






