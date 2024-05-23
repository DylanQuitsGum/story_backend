const db = require("../models");
const Genre = db.genre;

exports.create = (genre) => {
    return Genre.create({
      genre: genre.genre,
    })
      .catch((err) => {
        console.log(">> Error while creating Genre: ", err);
      });
  };

  exports.findAll = () => {
    return Genre.findAll({
  
    })
    .then((genres) => {
      return genres;
    })
    .catch((err) => {
      console.log(">> Error retrieving genres: ", err);
    });
  };