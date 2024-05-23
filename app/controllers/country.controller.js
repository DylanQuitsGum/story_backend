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

exports.findAll = () => {
  return Country.findAll({

  })
  .then((countries) => {
    return countries;
  })
  .catch((err) => {
    console.log(">> Error retrieving countries: ", err);
  });
};
