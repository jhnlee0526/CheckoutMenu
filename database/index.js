const mysql = require('mysql');

const connection = mysql.createConnection({
  user: 'root',
  // database: 'harrySQL_menu',
});

connection.connect();

// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err

//   console.log('The solution is: ', rows[0].solution)
// })

connection.end();

// module.exports = connection;
