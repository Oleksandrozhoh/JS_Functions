// 'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum = 111,
//   numPassangers = 0,
//   price = 199 * numPassangers
// ) {
//   //ES5
//   // flightNum ||= 111;
//   // numPassangers ||= 0;
//   // price ||= 199;

//   const booking = {
//     flightNum,
//     numPassangers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// ///

// const flightNum1 = 'LHG123';
// const passanger = {
//   name: 'alex',
//   passportNum: '1245323987329',
// };

// const checkIn = function (flightNum, passanger) {
//   passanger.name = 'Mr. ' + passanger.name;
//   passanger.passportNum === '1245323987329'
//     ? alert('Check in')
//     : alert('Passport number is NOT matching!');
// };

// console.log(checkIn(flightNum1, passanger));
// console.log(passanger);

// ////////////////////////
// const oneWord = function (str) {
//   return str.replaceAll(' ', '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join('');
// };

// // higher order function (with callback functions as an argument)
// const transformer = function (str, fn) {
//   console.log(fn(str));
//   console.log('function name: ' + fn.name);
//   return fn(str);
// };

// transformer('this is my string to test higher order functions', upperFirstWord);

// transformer('testing higher order function again', oneWord);

// higher order function (returns callback function)
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Alex');
greeterHey('Steven');

const greeterHello = greet('Hello');
greeterHello('Alex');

greet('Yhooho')('Alex');

// same with arrow functions ( one arrow function returns another arrow function )
const greetArrow = greeting => name => console.log(`${greeting}${name}`);
const greeterHeyArrow = greetArrow('Hey from arrow function to ')('Alex');

// this keyword
const delta = {
  airline: 'Delta',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      passanger: `${name}`,
    });
  },
};

delta.book('23523', 'alex');
delta.book('22352353', 'John');

const book = delta.book;

const spirit = {
  airline: 'Spirit',
  iataCode: 'LH',
  bookings: [],
};

// book('5235235', 'Alex');
book.call(spirit, '99990', 'Alex');
book.apply(spirit, ['8888', 'George cooper']);
book.bind(spirit)(`235235`, 'alex');
const bookSpirit = book.bind(spirit);
const bookSpiritFlightNum12345 = book.bind(spirit, 12345); // the additional param will go towards defining book function params
bookSpiritFlightNum12345('Alex Bright');

console.log(spirit.bookings);

// with event listeners
delta.planes = 300;
delta.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', delta.buyPlane.bind(delta));

// partial application:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addTaxInCalifornia = addTax.bind(null, 0.23);
console.log(addTaxInCalifornia(200));

const addTaxIllinois = function (value) {
  return addTax(0.2, value);
};
console.log(addTaxIllinois(200));

// const addTaxIllinoisAF = value => value => addTax(0.2, value);
// console.log(addTaxIllinoisAF(200));

// params recieved in layers, each layer has to be pilled
// away by providing the param and in many cases
// assigning funciton to a variable
const addTaxBasedOnTaxRate = function (rate) {
  return function (amount) {
    return amount + amount * rate;
  };
};

const addTaxInCalifornia2 = addTaxBasedOnTaxRate(0.23);
console.log(addTaxInCalifornia2(200));
