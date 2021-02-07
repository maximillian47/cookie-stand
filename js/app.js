"use strict";




let tableHeader = document.getElementById('table-header');
let cookieTable = document.getElementById('cookie-table');
let tableFooter = document.getElementById('table-footer');
let tableBody = document.getElementById('table-body');
let myForm = document.getElementById('form');

const allStores = [];
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm' ];

function franchise (name, minimumCustomerEachHour, maximumCustomerEachHour, averageCookiesSoldPerCustomer) {
  this.name = name;
  this.minimumCustomerEachHour = minimumCustomerEachHour;
  this.maximumCustomerEachHour = maximumCustomerEachHour;
  this.averageCookiesSoldPerCustomer = averageCookiesSoldPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.dailyStoreTotal = 0;
  allStores.push(this);
}

franchise.prototype.randomCustomerEachHour = function(){
  return Math.floor(Math.random() * (this.maximumCustomerEachHour - this.minimumCustomerEachHour + 1) + this.minimumCustomerEachHour);
};

franchise.prototype.calcCookiesSoldEachHour = function(){
  for (var i=0; i<hours.length; i++){
          let randomCustomerForOneHour = this.randomCustomerEachHour();
          this.cookiesSoldPerHourArray[i] = Math.ceil(randomCustomerForOneHour*this.averageCookiesSoldPerCustomer); 
          this.dailyStoreTotal = this.dailyStoreTotal + this.cookiesSoldPerHourArray[i];
        }
  };

franchise.prototype.render = function(){
    this.calcCookiesSoldEachHour();
  
    let tr = document.createElement('tr');
    let th = document.createElement('th');
    th.textContent = this.name;
    tr.appendChild(th);
        
    for (var i=0; i<this.cookiesSoldPerHourArray.length;i++){
      let td = document.createElement('td');
      td.textContent = this.cookiesSoldPerHourArray[i];
      tr.appendChild(td);
    }

    let td = document.createElement('td');
    td.textContent = this.dailyStoreTotal;
    tr.appendChild(td);
    tableBody.appendChild(tr);
};

function renderHeader(){
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = ' ';
  tr.appendChild(th);

  for(var i=0; i<hours.length; i++){
    let td = document.createElement('td');
    td.textContent = hours[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = 'Daily Location Totals';
  tr.appendChild(td);
  tableHeader.appendChild(tr);
}

function getGrandTotals(){
  const grandTotals = new Array(hours.length+1);
  grandTotals.fill(0);
  for (var i=0; i<allStores.length; i++){
    for (var j=0; j<allStores.length; j++){
      grandTotals[j] = allStores[i].cookiesSoldPerHourArray[j] + grandTotals[j];
      grandTotals[grandTotals.length-1] = allStores[i].cookiesSoldPerHourArray[j] + grandTotals[grandTotals.length-1];
    }
  }
  return grandTotals;
}

function renderFooter(){
  let grandTotals = getGrandTotals();
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tr.appendChild(th);
  for (var i=0; i<grandTotals.length; i++){
    let td = document.createElement('td');
    td.textContent = grandTotals[i];
    tr.appendChild(td);
  }
  tableFooter.appendChild(tr);
}

function renderAll(){
  for (var i=0; i<allStores.length; i++){
    allStores[i].render();
  }
} 

function handleSubmit(event){
  event.preventDefault();

  let newLocation = event.target.newlocation.value;
  let newMinCusEachHour = +event.target.minimumCustomerEachHour.value;
  let newMaxCusEachHour = +event.target.maximumCustomerEachHour.value;
  let newAvgCookiePerCus = +event.target.averageCookiesSoldPerCustomer.value;

  let newFranchise = new franchise(newLocation, newMinCusEachHour, newMaxCusEachHour, newAvgCookiePerCus);
  newFranchise.render();
  
  tableFooter.removeChild(tableFooter.lastChild);
  renderFooter();
}

new franchise('Seattle', 23, 65, 6.3);
new franchise('Tokyo', 3, 24, 1.2);
new franchise('Dubai', 11, 38, 3.7);
new franchise('Paris', 20, 38, 2.3);
new franchise('Lima', 2, 16, 4.6);

renderAll();
renderHeader();
renderFooter();
myForm.addEventListener('submit', handleSubmit);