const database = require('../database');

module.exports = (req, res) => {
  
  database
    .query(
      'UPDATE INTO album set title = ?, genre = ?, picture = ?, artist = ?) WHERE id = ?',
      [album.title, album.genre, album.picture, album.artist]
    )
    .then(([result]) => {
      res.location(`/api/album/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Error saving the album');
    });
};
