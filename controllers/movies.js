const query = require('../models/movies.js');

module.exports = {

  get: (req, res) => {
    const queryStr = 'SELECT * FROM movies';
    const queryArgs = [];
    query(queryStr, queryArgs, (err, results) => {
      if (err) {
        res.status(404);
      } else {
        res.status(201);
        res.json(results);
      }
    });
  },

  post: (req, res) => {
    const data = req.body;
    const queryStr = 'INSERT INTO movies (name, watched) VALUE (?, ?)';
    const queryArgs = [data.name, data.watched];
    query(queryStr, queryArgs, (err) => {
      if (err) {
        res.status(404);
      } else {
        res.status(201);
        res.send('Your movie is now on the list')
      }
    })
  }

}