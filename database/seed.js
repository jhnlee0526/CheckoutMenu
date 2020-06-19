const faker = require('faker');

// need to generate 100 different properties
// then need to generate random number of reservations for each property (between 5-10)

// FOR PROPERTIES:
// generates nightly rate between 100 and 500
const generateNightlyRate = Math.floor(Math.random() * 401) + 100;

// generates a rating between 4.0-4.99, max two decimal lengths
const generateRating = (Math.random() + 4).toFixed(2);

// generates random number of reviews between 50 and 250
const generateNumberOfReviews = Math.floor(Math.random() * 201) + 50;

// generates random number of guests between 2 and 15
const generateGuestsAllowed = Math.floor(Math.random() * 14) + 2;

// generates random number for each property's reservations
const generateNumberOfReservations = Math.floor(Math.random() * 5) + 5;

console.log('nightly_rate: ', generateNightlyRate);
console.log('rating: ', generateRating);
console.log('reviews: ', generateNumberOfReviews);
console.log('totalGuestsAllowed: ', generateGuestsAllowed);
console.log('reservationCount: ', generateNumberOfReservations);


// FOR RESERVATIONS:
// generates check in date
let checkIn = faker.date.between('2020-06-18', '2020-12-31');
console.log(checkIn);
// create a random nights generator
// add that many nights to the checkin date to get the checkout date
