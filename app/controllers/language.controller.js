const db = require("../models");
const Language = db.language;

exports.create = (language) => {
    return Language.create({
      language: language.language,
    })
      .catch((err) => {
        console.log(">> Error while creating Language: ", err);
      });
  };

  exports.findAll = () => {
    return Language.findAll({
  
    })
    .then((languages) => {
      return languages;
    })
    .catch((err) => {
      console.log(">> Error retrieving languages: ", err);
    });
  };