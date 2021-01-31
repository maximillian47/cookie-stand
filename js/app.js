"use strict";

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];
let seattleList = document.getElementById('seattle');
let tokyoList = document.getElementById('tokyo');
let dubaiList = document.getElementById('dubai');
let parisList = document.getElementById('paris');
let limaList = document.getElementById('lima');



function franchise (name, minimumCustomerEachHour, maximumCustomerEachHour, averageCookiesSoldPerCustomer, listName) {
  this.name = name;
  this.minimumCustomerEachHour = minimumCustomerEachHour;
  this.maximumCustomerEachHour = maximumCustomerEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.listName = listName;
  this.randomCustomerEachHour = function(){
    return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
  };

  this.calcCookiesSoldEachHour = function(){
    for (var i=0; i<hours.length; i++){
            let randomCustomerForOneHour = this.randomCustomerEachHour();
            this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
            this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
          }
          console.log(this.cookiesSoldPerHourArray);
    };
}

franchise.prototype.render = function(){
    this.calcCookiesSoldEachHour();
    // console.log('render method runs here');
    for (var i=0; i<hours.length;i++){
    let li = document.createElement('li');
    li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
    this.listName.appendChild(li);
     }
    let li = document.createElement('li');
    li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
    this.listName.appendChild(li);
};



let seattle = new franchise('Seattle', 23, 65, 6.3, seattleList);
let tokyo = new franchise('Tokyo', 3, 24, 1.2, tokyoList);
let dubai = new franchise('Dubai', 11, 38, 3.7, dubaiList);
let paris = new franchise('Paris', 20, 38, 2.3, parisList);
let lima = new franchise('Lima', 2, 16, 4.6, limaList);
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
// let seattle = {
//   name: 'Seattle',
//   minimumCustomerEachHour: 23, 
//   maximumCustomerEachHour: 65, 
//   averageCookiesSoldPerCustomer: 6.3, 
//   // will hold the calculated number of cookies sold each hour
//   cookiesSoldPerHourArray:[],
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,

//   // a method to calculate random number of customers per hour
//   // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomCustomerEachHour: function(){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },
    
//   // a method to calculate and populate number of cookies sold per hour array
//   calcCookiesSoldEachHour: function(){
//     console.log('calcCookiesSoldEachHour starts here');
    
//     for (var i=0; i<hours.length; i++){
//       let randomCustomerForOneHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
//       this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
//     }
//     console.log(this.cookiesSoldPerHourArray);
//     return this.cookiesSoldPerHourArray; 
//   },

//   // a method to render list items
//   render: function(){
//     this.calcCookiesSoldEachHour();
//     // console.log('render method runs here');
//     for (var i=0; i<hours.length;i++){
//     let li = document.createElement('li');
//     li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//     seattleList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     seattleList.appendChild(li);
//   },
// };

// let tokyo = {
//   name: 'Tokyo',
//   minimumCustomerEachHour: 3, 
//   maximumCustomerEachHour: 24, 
//   averageCookiesSoldPerCustomer: 1.2, 
//   cookiesSoldPerHourArray:[],
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,

//   // a method to calculate random number of customers per hour
//   // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomCustomerEachHour: function(){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },
    
//   // a method to calculate and populate number of cookies sold per hour array
//   calcCookiesSoldEachHour: function(){
//     console.log('calcCookiesSoldEachHour starts here');
    
//     for (var i=0; i<hours.length; i++){
//       let randomCustomerForOneHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
//       this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
//     }
//     console.log(this.cookiesSoldPerHourArray);
//     return this.cookiesSoldPerHourArray; 
//   },

//   // a method to render list items
//   render: function(){
//     this.calcCookiesSoldEachHour();
//     // console.log('render method runs here');
//     for (var i=0; i<hours.length;i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       tokyoList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     tokyoList.appendChild(li);
//   },
// }

// let dubai = {
//   name: 'Dubai',
//   minimumCustomerEachHour: 11, 
//   maximumCustomerEachHour: 38, 
//   averageCookiesSoldPerCustomer: 3.7, 
//   cookiesSoldPerHourArray:[],
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,

//   // a method to calculate random number of customers per hour
//   // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomCustomerEachHour: function(){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },
    
//   // a method to calculate and populate number of cookies sold per hour array
//   calcCookiesSoldEachHour: function(){
//     console.log('calcCookiesSoldEachHour starts here');
    
//     for (var i=0; i<hours.length; i++){
//       let randomCustomerForOneHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
//       this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
//     }
//     console.log(this.cookiesSoldPerHourArray);
//     return this.cookiesSoldPerHourArray; 
//   },

//   // a method to render list items
//   render: function(){
//     this.calcCookiesSoldEachHour();
//     // console.log('render method runs here');
//     for (var i=0; i<hours.length;i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       dubaiList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     dubaiList.appendChild(li);
//   },
// }

// let paris = {
//   name: 'Paris',
//   minimumCustomerEachHour: 20, 
//   maximumCustomerEachHour: 38, 
//   averageCookiesSoldPerCustomer: 2.3, 
//   cookiesSoldPerHourArray:[],
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,

//   // a method to calculate random number of customers per hour
//   // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomCustomerEachHour: function(){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },
    
//   // a method to calculate and populate number of cookies sold per hour array
//   calcCookiesSoldEachHour: function(){
//     console.log('calcCookiesSoldEachHour starts here');
    
//     for (var i=0; i<hours.length; i++){
//       let randomCustomerForOneHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
//       this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
//     }
//     console.log(this.cookiesSoldPerHourArray);
//     return this.cookiesSoldPerHourArray; 
//   },

//   // a method to render list items
//   render: function(){
//     this.calcCookiesSoldEachHour();
//     // console.log('render method runs here');
//     for (var i=0; i<hours.length;i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       parisList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     parisList.appendChild(li);
//   },
  
// }

// let lima = {
//   name: 'Lima',
//   minimumCustomerEachHour: 2, 
//   maximumCustomerEachHour: 16, 
//   averageCookiesSoldPerCustomer: 4.6, 
//   cookiesSoldPerHourArray:[],
//   // will hold the calculated number of cookies sold in the store all day long
//   dailyStoreTotal: 0,

//   // a method to calculate random number of customers per hour
//   // doc: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
//   randomCustomerEachHour: function(){
//     return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
//   },
    
//   // a method to calculate and populate number of cookies sold per hour array
//   calcCookiesSoldEachHour: function(){
//     console.log('calcCookiesSoldEachHour starts here');
    
//     for (var i=0; i<hours.length; i++){
//       let randomCustomerForOneHour = this.randomCustomerEachHour();
//       this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
//       this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
//     }
//     console.log(this.cookiesSoldPerHourArray);
//     return this.cookiesSoldPerHourArray; 
//   },

//   // a method to render list items
//   render: function(){
//     this.calcCookiesSoldEachHour();
//     // console.log('render method runs here');
//     for (var i=0; i<hours.length;i++){
//       let li = document.createElement('li');
//       li.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]} cookies`;
//       limaList.appendChild(li);
//     }
//     let li = document.createElement('li');
//     li.textContent = `Total: ${this.dailyStoreTotal} cookies`;
//     limaList.appendChild(li);
//   },
// }

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();