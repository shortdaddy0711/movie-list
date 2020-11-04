const db = require('../db/connection.js');

const query = (queryStr, queryArgs, callback) => {
  db.connection.query(queryStr, queryArgs, (err, results) => {
    if (err) {
      console.log(err);
      callback(err);
    } else {
      callback(null, results);
    }
  })
}

module.exports = query;

