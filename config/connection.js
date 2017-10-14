var mysql = require('mysql');

require('dotenv').config();

var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'chicago_public'
});

pool.getConnection(function(err, connection) {
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  connection.release();

});

module.exports = pool;