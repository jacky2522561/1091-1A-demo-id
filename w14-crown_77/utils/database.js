const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '0000',
  database: 'dbdemo_77',
});

module.exports = pool.promise();
