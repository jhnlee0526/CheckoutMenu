const faker = require('faker');
const moment = require('moment');

// need to generate 100 different properties
// then need to generate random number of reservations for each property (between 5-10)

// FOR PROPERTIES:
// generates nightly rate between 100 and 500
const generateNightlyRate = () => Math.floor(Math.random() * 401) + 100;
// generates a rating between 4.0-4.99, max two decimal lengths
const generateRating = () => (Math.random() + 4).toFixed(2);

// generates random number of reviews between 50 and 250
const generateNumberOfReviews = () => Math.floor(Math.random() * 201) + 50;

// generates random number of guests between 2 and 15
const generateGuestsAllowed = () => Math.floor(Math.random() * 14) + 2;

// generates random number for each property's reservations
const generateNumberOfReservations = () => Math.floor(Math.random() * 5) + 5;

// console.log('nightly_rate: ', generateNightlyRate);
// console.log('rating: ', generateRating);
// console.log('reviews: ', generateNumberOfReviews);
// console.log('totalGuestsAllowed: ', generateGuestsAllowed);
// console.log('reservationCount: ', generateNumberOfReservations);

const getProperty = (num) => {
  const numOfProperties = num || 1;
  const properties = [];
  for (let i = 0; i < numOfProperties; i++) {
    const property = {
      id: i + 1,
      nightlyRate: generateNightlyRate(),
      rating: generateRating(),
      reviews: generateNumberOfReviews(),
      totalGuestsAllowed: generateGuestsAllowed(),
      reservationCount: generateNumberOfReservations(),
    };
    properties.push(property);
  }
  return properties;
};

// const allProperties = getProperty(2);
const allProperties = getProperty(100);
// console.log(allProperties);

// FOR RESERVATIONS:
// generates check in date
const checkInDate = () => {
  return faker.date.between('2020-06-18', '2020-12-31');
  // moment(faker.date.between('2020-06-18', '2020-12-31')).format('MMM Do YYYY');
};
// const date = checkInDate();

// create a random nights generator
const generateNumberOfNights = () => Math.floor(Math.random() * 10) + 1;
// const nights = generateNumberOfNights();

// add that many nights to the checkin date to get the checkout date
const checkOutDate = (startDate, num) => {
  // console.log('date: ', startDate, 'nights: ', num);
  // const checkIn = moment(date).format();
  // console.log('checkIn: ', checkIn)
  return moment(startDate).add(num, 'days').calendar();
};
// console.log('checkout', checkOutDate(date, nights));

const getPropertyReservations = (resCount, propId, rate) => {
  const propertyReservations = [];
  for (let i = 0; i < resCount; i++) {
    let date = checkInDate();
    let nights = generateNumberOfNights();
    let total = (((nights * rate) * 1.1) + 75 + 100).toFixed(2);
    const reservation = {
      propertyId: propId,
      checkIn: moment(date).format('MM/DD/YYYY'),
      checkOut: checkOutDate(date, nights),
      nights: nights,
      nightlyRate: rate,
      totalCost: total,
      guestCount: 2,
      adults: 2,
      children: 0,
      infants: 0,
    };
    propertyReservations.push(reservation);
  }
  return propertyReservations;
};

//loop through the properties array and for each property, get their id, the nightly rate, and the reservation count, call helper function with those params
const allReservations = (properties) => {
  let reservations = [];
  for (let i = 0; i < properties.length; i++) {
    let propId = properties[i].id;
    let rate = properties[i].nightlyRate;
    let resCount = properties[i].reservationCount;
    reservations = reservations.concat(getPropertyReservations(resCount, propId, rate));
  }
  return reservations;
};
console.log(allReservations(allProperties));

/*
reservations = {
  id: //autofilled/incrementing?
  propertyId: //need to find out how many properties
  checkInDate: //need to transform this with moments when i call it here
  checkOutDate:
  nights:
  nightlyRate:  //will depend on the propertyId
  totalCost: //math: ((nightly rate * nights) *1.1(taxes & fees) + 75 cleaning + 100 service fee)
  guestCount: //sum of adults, children, and infants
  adults: //can set it at 2 for the fake data
  children: //can set it at 0 for the fake data
  infants: //can set it at 0 for the fake data
}
*/
