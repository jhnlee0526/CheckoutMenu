const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  database: 'harrySQL_menu',
});

connection.connect((err) => {
  if (err) {
    console.log('db connection error: ', err);
  } else {
    console.log('Connected: MySQL Started!');
  }
});

module.exports = connection;
