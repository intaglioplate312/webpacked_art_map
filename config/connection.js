var mysql = require('mysql');

require('dotenv').config();

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else {
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASS,
  database        : process.env.DB_DB
 });
};

pool.getConnection(function(err, connection) {
  connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });

  connection.release();

});

module.exports = pool;