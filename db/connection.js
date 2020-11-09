const mysql = require('mysql');

const connection = mysql.createConnection({
  user     : 'root',
  password : 'hopper21',
  database : 'movies'
});

connection.connect((err) => {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;