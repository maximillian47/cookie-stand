"use strict";

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];
// let seattleList = document.getElementById('seattle');
// let tokyoList = document.getElementById('tokyo');
// let dubaiList = document.getElementById('dubai');
// let parisList = document.getElementById('paris');
// let limaList = document.getElementById('lima');

let myContainer = document.getElementById('container');
let cookieTable = document.getElementById('cookie-table');

function franchise (name, minimumCustomerEachHour, maximumCustomerEachHour, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.minimumCustomerEachHour = minimumCustomerEachHour;
  this.maximumCustomerEachHour = maximumCustomerEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.dailyStoreTotal = 0;

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
    let tr = document.createElement('tr');
    cookieTable.appendChild(tr);

    let th = document.createElement('th');
    th.textContent = this.name;
    tr.appendChild(th);
    
    this.calcCookiesSoldEachHour();
    
    for (var i=0; i<hours.length;i++){
      this.dailyStoreTotal += this.cookiesSoldPerHourArray[i]
      let td = document.createElement('td');
      td.textContent = this.cookiesSoldPerHourArray[i];
      tr.appendChild(td);
    }

    let td = document.createElement('td');
    td.textContent = this.dailyStoreTotal;
    tr.appendChild(td);
};



let seattle = new franchise('Seattle', 23, 65, 6.3);
let tokyo = new franchise('Tokyo', 3, 24, 1.2);
let dubai = new franchise('Dubai', 11, 38, 3.7);
let paris = new franchise('Paris', 20, 38, 2.3);
let lima = new franchise('Lima', 2, 16, 4.6);
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