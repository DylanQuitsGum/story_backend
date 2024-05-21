const db = require("../models");
const Genre = db.genre;

// Create and Save a new Genre
exports.create = (genre) => {
  return Genre.create({
    genre: genre.genre,
  })
  .then((genre) => {
    console.log('>> Created Genre: ' + JSON.stringify(genre,null,2));
    return genre;
  })
  .catch((err) => {
    console.log('>> Error while creating Genre: ', err);
  });
};