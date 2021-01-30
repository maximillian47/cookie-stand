"use strict";

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

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
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
    
  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    console.log('calcCookiesSoldEachHour starts here');
    
    for (var i=0; i<14; i++){
      let randomCustomerForOneHour = this.randomCustomerEachHour();
      this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
    }
    console.log(this.cookiesSoldPerHourArray);
    return this.cookiesSoldPerHourArray; 
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method runs here');
  },
};

let tokyo = {
  name: 'Tokyo',
  minimumCustomerEachHour: 3, 
  maximumCustomerEachHour: 24, 
  averageCookiesSoldPerCustomer: 1.2, 
  cookiesSoldPerHourArray:[],
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,

  // a method to calculate random number of customers per hour
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
    
  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    console.log('calcCookiesSoldEachHour starts here');
    
    for (var i=0; i<14; i++){
      let randomCustomerForOneHour = this.randomCustomerEachHour();
      this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
    }
    console.log(this.cookiesSoldPerHourArray);
    return this.cookiesSoldPerHourArray; 
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method runs here');
  },
}

let dubai = {
  name: 'Dubai',
  minimumCustomerEachHour: 11, 
  maximumCustomerEachHour: 38, 
  averageCookiesSoldPerCustomer: 3.7, 
  cookiesSoldPerHourArray:[],
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,

  // a method to calculate random number of customers per hour
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
    
  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    console.log('calcCookiesSoldEachHour starts here');
    
    for (var i=0; i<14; i++){
      let randomCustomerForOneHour = this.randomCustomerEachHour();
      this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
    }
    console.log(this.cookiesSoldPerHourArray);
    return this.cookiesSoldPerHourArray; 
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method runs here');
  },
}

let paris = {
  name: 'Paris',
  minimumCustomerEachHour: 20, 
  maximumCustomerEachHour: 38, 
  averageCookiesSoldPerCustomer: 2.3, 
  cookiesSoldPerHourArray:[],
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,

  // a method to calculate random number of customers per hour
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
    
  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    console.log('calcCookiesSoldEachHour starts here');
    
    for (var i=0; i<14; i++){
      let randomCustomerForOneHour = this.randomCustomerEachHour();
      this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
    }
    console.log(this.cookiesSoldPerHourArray);
    return this.cookiesSoldPerHourArray; 
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method runs here');
  },
  
}

let lima = {
  name: 'Lima',
  minimumCustomerEachHour: 2, 
  maximumCustomerEachHour: 16, 
  averageCookiesSoldPerCustomer: 4.6, 
  cookiesSoldPerHourArray:[],
  // will hold the calculated number of cookies sold in the store all day long
  dailyStoreTotal: 0,

  // a method to calculate random number of customers per hour
  // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  randomCustomerEachHour: function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  },
    
  // a method to calculate and populate number of cookies sold per hour array
  calcCookiesSoldEachHour: function(){
    console.log('calcCookiesSoldEachHour starts here');
    
    for (var i=0; i<14; i++){
      let randomCustomerForOneHour = this.randomCustomerEachHour();
      this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
    }
    console.log(this.cookiesSoldPerHourArray);
    return this.cookiesSoldPerHourArray; 
  },

  // a method to render list items
  render: function(){
    this.calcCookiesSoldEachHour();
    console.log('render method runs here');
  },
}

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();