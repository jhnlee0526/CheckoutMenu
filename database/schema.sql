DROP DATABASE IF EXISTS harrySQL_menu;

CREATE DATABASE harrySQL_menu;

USE harrySQL_menu;

CREATE TABLE properties (
  id INT NOT NULL,
  nightly_rate SMALLINT,
  rating DECIMAL(3,2),
  reviews SMALLINT,
  total_guests_allowed TINYINT,
  reservation_count TINYINT,
  PRIMARY KEY (id)
);

CREATE TABLE reservations (
  id INT NOT NULL AUTO_INCREMENT,
  property_id INT,
  check_in DATE,
  check_out DATE,
  nights TINYINT,
  nightly_rate SMALLINT,
  total_cost DECIMAL(6, 2),
  guest_count TINYINT,
  adults TINYINT,
  children TINYINT,
  infants TINYINT,
  PRIMARY KEY (id),
  FOREIGN KEY (property_id) REFERENCES properties(id)
);



/*  Execute this file from the command line by typing:
 *    mysql -u root < database/schema.sql
 *  to create the database and the tables.*/

