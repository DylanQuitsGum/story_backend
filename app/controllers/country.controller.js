const db = require("../models");
const Country = db.country;

exports.create = (country) => {
    return Country.create({
      country: country.country,
    })
      .catch((err) => {
        console.log(">> Error while creating Country: ", err);
      });
  };

  exports.findAll = (req, res) => {
    const country = req.query.language;
    var condition = country ? { country: { [Op.like]: `%${country}%` } } : null;
  
    Country.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving countries."
        });
      });
  };