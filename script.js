'use strict';

const bookings = [];

const createBooking = function (
  flightNum = 111,
  numPassangers = 0,
  price = 199 * numPassangers
) {
  //ES5
  // flightNum ||= 111;
  // numPassangers ||= 0;
  // price ||= 199;

  const booking = {
    flightNum,
    numPassangers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');

///

const flightNum1 = 'LHG123';
const passanger = {
  name: 'alex',
  passportNum: '1245323987329',
};

const checkIn = function (flightNum, passanger) {
  passanger.name = 'Mr. ' + passanger.name;
  passanger.passportNum === '1245323987329'
    ? alert('Check in')
    : alert('Passport number is NOT matching!');
};

console.log(checkIn(flightNum1, passanger));
console.log(passanger);
