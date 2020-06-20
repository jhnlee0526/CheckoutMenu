const faker = require('faker');
const moment = require('moment');
const ObjectsToCsv = require('objects-to-csv');
const db = require('./index.js');
// const fs = require('fs');

// need to generate 100 different properties
// then need to generate random number of reservations for each property (between 5-10)

// FOR PROPERTIES:
// generates nightly rate between 100 and 500
const generateNightlyRate = () => Math.floor(Math.random() * 401) + 100;
// generates a rating between 4.0-4.99, max two decimal lengths
const generateRating = () => (Math.random() + 4).toFixed(2);

// generates random number of reviews between 50 and 250
const generateNumberOfReviews = () => Math.floor(Math.random() * 201) + 50;

// generates random number of guests between 2 and 12
const generateGuestsAllowed = () => Math.floor(Math.random() * 11) + 2;

// generates random number for each property's reservations
const generateNumberOfReservations = () => Math.floor(Math.random() * 5) + 5;

const getProperty = (num) => {
  const numOfProperties = num || 1;
  const properties = [];
  for (let i = 0; i < numOfProperties; i++) {
    const property = {
      id: i + 1,
      nightly_rate: generateNightlyRate(),
      rating: generateRating(),
      reviews: generateNumberOfReviews(),
      total_guests_allowed: generateGuestsAllowed(),
      reservation_count: generateNumberOfReservations(),
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
const checkInDate = () => faker.date.between('2020-06-18', '2020-12-31');

// create a random nights generator
const generateNumberOfNights = () => Math.floor(Math.random() * 10) + 1;

// add that many nights to the checkin date to get the checkout date
const checkOutDate = (startDate, num) => moment(startDate).add(num, 'days').format('YYYY-MM-DD');

// generates random number of adults between 1 and the max guests allowed
const generateAdults = (max) => Math.floor(Math.random() * max) + 1;

// generates random number of children between 0 and 2
const generateChildren = () => Math.floor(Math.random() * 3);

// generates random number of infants between 0 and 2
const generateInfants = () => Math.floor(Math.random() * 3);

let count = 1;

const getPropertyReservations = (resCount, propId, rate, guests) => {
  const propertyReservations = [];
  for (let i = 0; i < resCount; i++) {
    const date = checkInDate();
    const nights = generateNumberOfNights();
    const total = (((nights * rate) * 1.1) + 75 + 100).toFixed(2);
    const adults = generateAdults(guests);
    let children = generateChildren();
    let infants = generateInfants();
    if (adults === guests) {
      children = 0;
      infants = 0;
    } else if (adults + children >= guests) {
      infants = 0;
      children = guests - adults;
    } else if (adults + children + infants > guests) {
      infants = guests - adults - children;
    }
    const totalGuests = (adults + children + infants);
    const reservation = {
      id: count,
      property_id: propId,
      check_in: moment(date).format('YYYY-MM-DD'),
      check_out: checkOutDate(date, nights),
      nights: nights,
      nightly_rate: rate,
      total_cost: total,
      guest_count: totalGuests,
      adults: adults,
      children: children,
      infants: infants,
    };
    propertyReservations.push(reservation);
    count++;
  }
  return propertyReservations;
};

//loop through the properties array and for each property, get their id, the nightly rate, and the reservation count, call helper function with those params
const generateReservations = (properties) => {
  let reservations = [];
  for (let i = 0; i < properties.length; i++) {
    const propId = properties[i].id;
    const rate = properties[i].nightly_rate;
    const resCount = properties[i].reservation_count;
    const guestsAllowed = properties[i].total_guests_allowed;
    reservations = reservations.concat(getPropertyReservations(resCount, propId, rate, guestsAllowed));
  }
  return reservations;
};
const allReservations = generateReservations(allProperties);

// put my data into the database -- insert allProperties and allReservations

// fs.writeFile('./test.csv', JSON.stringify(allProperties[0]), (err) => {
//   if (err) {
//     console.log('error saving property data', err);
//   } else {
//     console.log('property data saved!');
//   }
// });

// fs.writeFile('./reservationData.csv', allReservations, (err) => {
//   if (err) {
//     console.log('error saving reservation data', err);
//   } else {
//     console.log('reservation data saved!');
//   }
// });

new ObjectsToCsv(allProperties).toDisk('./propertyData.csv');

new ObjectsToCsv(allReservations).toDisk('./reservationData.csv');

// drop all data in the table
// delete from properties & delete from reservations
db.query('delete from reservations', (err, result) => {
  if (err) {
    console.log('error deleting rows from reservations table: ', err);
  } else {
    console.log('all rows from reservations table deleted', result);
  }
});

db.query('delete from properties', (err, result) => {
  if (err) {
    console.log('error deleting rows from properties table: ', err);
  } else {
    console.log('all rows from properties table deleted', result);
  }
});

const propertyQuery = "load data local infile './propertyData.csv' into table properties fields terminated by ',' enclosed by '\"' lines terminated by '\n' ignore 1 lines";
db.query(propertyQuery, (err, result) => {
  if (err) {
    console.log('error inserting into db: ', err);
  } else {
    console.log('data inserted into db: ', result);
  }
});

const reservationQuery = "load data local infile './reservationData.csv' into table reservations fields terminated by ',' enclosed by '\"' lines terminated by '\n' ignore 1 lines";
db.query(reservationQuery, (err, result) => {
  if (err) {
    console.log('error inserting into db: ', err);
  } else {
    console.log('data inserted into db: ', result);
  }
});
