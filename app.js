'use strict'

console.log('js loaded');

var Locations = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki]
var hours = ["6am: ", "7am: ", "8am: ", "9am: ", "10am: ", "11am: ", "12pm: ", "1pm: ", "2pm: ", "3pm: ", "4pm: ", "5pm: ", "6pm: ", "7pm: ", "8pm: ", "Total: "];

// firstAndPike Object with all related keys
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookSale: 6.3,
  randPerHour: [],

  getRandomIntInclusive: function () {
    var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randFunct;
    //The maximum is inclusive and the minimum is inclusive 
  },
  getAvgCookPerHour1: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
      this.randPerHour.push(hourlyCustSale);
      console.log(this.randPerHour)
    }
    return this.randPerHour;

  }
}
firstAndPike.getAvgCookPerHour1();

var locationData = document.getElementById('pike');
var totalCooks = 0
for (var i = 0; i <= firstAndPike.randPerHour.length; i++) {
  for (i = 0; i < firstAndPike.randPerHour.length; i++) {
    var locationLi = document.createElement('li');
    totalCooks += firstAndPike.randPerHour[i]
    locationLi.textContent = hours[i] + firstAndPike.randPerHour[i] + " cookies";
    locationData.appendChild(locationLi);

  }
  locationLi.textContent = "Total: " + totalCooks + " cookies"
  locationData.appendChild(locationLi)
}

console.log(locationData);
console.log(firstAndPike.getAvgCookPerHour1());
console.log("for some reason there are arrays with 32/34 items showing... check this later")

// function getRandomIntInclusive() {
//   min = Math.ceil(seaTacAirport.minCust);
//   max = Math.floor(seaTacAirport.maxCust);

//   var firstAndPike = {
//     minCust:23, 
//     maxCust:65,
//     avgCookSale:6.3,
//     randPerHour:[],

//     getRandomIntInclusive: function() {
//       var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + minCust;
//       return randFunct;
//        //The maximum is inclusive and the minimum is inclusive 
//     }  
//     getAvgCookPerHour: function(){
//       var hourlyCustSale = this.getRandomIntInclusive() * this.avgCookSale;
//       this.randPerHour.push(hourlyCustSale);
//     }  
//   }

var seaTacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookSale: 1.2,
  randPerHour: [],

  getRandomIntInclusive: function () {
    var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randFunct;
    //The maximum is inclusive and the minimum is inclusive 
  },
  getAvgCookPerHour2: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
      this.randPerHour.push(hourlyCustSale);
    }
    return this.randPerHour;
  }
}

seaTacAirport.getAvgCookPerHour2();

var locationData = document.getElementById('seaTac');
var totalCooks = 0
for (var i = 0; i <= seaTacAirport.randPerHour.length; i++) {
  while (i < seaTacAirport.randPerHour.length) {
    var locationLi = document.createElement('li');
    totalCooks += seaTacAirport.randPerHour[i]
    locationLi.textContent = hours[i] + seaTacAirport.randPerHour[i] + " cookies";
    locationData.appendChild(locationLi);
    i++
  }
  locationLi.textContent = "Total: " + totalCooks + " cookies"
  locationData.appendChild(locationLi)
}
console.log(locationData);
console.log(seaTacAirport.getAvgCookPerHour2());
console.log("for some reason there are arrays with 32/34 items showing... check this later")

// seaTacAirport.getAvgCookPerHour();
// var seaTacData = document.getElementById('seaTac');
// for (var i = 0; i < seaTacAirport.randPerHour.length; i++) {
//   var seaTacLi = document.createElement('li');
//   seaTacLi.textContent = seaTacAirport.randPerHour[i];
//   seaTacData.appendChild(seaTacLi);
// }
// console.log(seaTacData);
// console.log(seaTacAirport.getAvgCookPerHour());

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookSale: 3.7,
  randPerHour: [],

  getRandomIntInclusive: function () {
    var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randFunct;
    //The maximum is inclusive and the minimum is inclusive 
  },
  getAvgCookPerHour3: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
      this.randPerHour.push(hourlyCustSale);
    }
    return this.randPerHour;
  }
}
seattleCenter.getAvgCookPerHour3();
var locationData = document.getElementById('seaCenter');
var totalCooks = 0
for (var i = 0; i <= seattleCenter.randPerHour.length; i++) {
  while (i < seattleCenter.randPerHour.length) {
    var locationLi = document.createElement('li');
    totalCooks += seattleCenter.randPerHour[i]
    locationLi.textContent = hours[i] + seattleCenter.randPerHour[i] + " cookies";
    locationData.appendChild(locationLi);
    i++
  }
  locationLi.textContent = "Total: " + totalCooks + " cookies"
  locationData.appendChild(locationLi)
}
console.log(locationData);
console.log(seattleCenter.getAvgCookPerHour3());
console.log("for some reason there are arrays with 32/34 items showing... check this later")

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookSale: 2.3,
  randPerHour: [],

  getRandomIntInclusive: function () {
    var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randFunct;
    //The maximum is inclusive and the minimum is inclusive 
  },
  getAvgCookPerHour4: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
      this.randPerHour.push(hourlyCustSale);
    }
    return this.randPerHour;
  }
}
capitolHill.getAvgCookPerHour4();
var locationData = document.getElementById('capHill');
var totalCooks = 0;
for (var i = 0; i <= capitolHill.randPerHour.length; i++) {
  while (i < capitolHill.randPerHour.length) {
    var locationLi = document.createElement('li');
    totalCooks += capitolHill.randPerHour[i];
    locationLi.textContent = hours[i] + capitolHill.randPerHour[i] + " cookies";
    locationData.appendChild(locationLi);
    i++;
  }
  locationLi.textContent = "Total: " + totalCooks + " cookies";
  locationData.appendChild(locationLi);
}
console.log(locationData);
console.log(capitolHill.getAvgCookPerHour4());
console.log("for some reason there are arrays with 32/34 items showing... check this later")

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookSale: 4.6,
  randPerHour: [],

  getRandomIntInclusive: function () {
    var randFunct = Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
    return randFunct;
    //The maximum is inclusive and the minimum is inclusive 
  },
  getAvgCookPerHour5: function () {
    for (var i = 0; i < hours.length; i++) {
      var hourlyCustSale = Math.floor(this.getRandomIntInclusive() * this.avgCookSale);
      this.randPerHour.push(hourlyCustSale);
    }
    return this.randPerHour;
  }
}

alki.getAvgCookPerHour5();
var locationData = document.getElementById('alki');
var totalCooks = 0
for (var i = 0; i <= alki.randPerHour.length; i++) {
  while (i < alki.randPerHour.length) {
    var locationLi = document.createElement('li');
    totalCooks += alki.randPerHour[i]
    locationLi.textContent = hours[i] + alki.randPerHour[i] + " cookies";
    locationData.appendChild(locationLi);
    i++
  }
  locationLi.textContent = "Total: " + totalCooks + " cookies"
  locationData.appendChild(locationLi)
}
console.log(locationData);
console.log(alki.getAvgCookPerHour5());
console.log("for some reason there are arrays with 32/34 items showing... check this later")







// add one person's info to the page
// function addPersonInfo(person) {
//   var ul = document.getElementById('main-content');
//   var personInfo = document.createElement('li');
//   var personNameDiv = document.createElement('div');
//   var personShoeSizeDiv = document.createElement('div');

//   personNameDiv.textContent = person.name;
//   personShoeSizeDiv.textContent = 'shoe size: ' + person.shoeSize;
//   personInfo.appendChild(personNameDiv);
//   personInfo.appendChild(personShoeSizeDiv);
//   ul.appendChild(personInfo);
// }

// addPersonInfo(me);
// addPersonInfo(justin);
