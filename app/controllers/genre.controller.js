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

  exports.findAll = (req, res) => {
    const genre = req.query.genre;
    var condition = genre ? { genre: { [Op.like]: `%${genre}%` } } : null;
  
    Genre.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving genres."
        });
      });
  };