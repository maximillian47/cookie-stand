"use strict";

console.log('hello world');

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', 'Total' ];

let seattle = {
  name: 'Seattle',
  minimumCustomerEachHour: 23, 
  maximumCustomerEachHour: 65, 
  averageCookiesSoldPerCustomer: 6.3, 
  // will hold the calculated number of cookies sold each hour
  cookiesSoldPerHourArray:[],
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,

  // a method to calculate random number of customers per hour
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour) + this.minimumCustomerEachHour);
  },

  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    let randomCustomerForOneHour = this.randomCustomerEachHour();
    console.log(randomCustomerForOneHour);
    console.log('calcCookiesSoldEachHour');
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method');
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();


let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
}

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
}

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
}

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
}