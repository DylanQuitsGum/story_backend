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

  exports.findAll = (req, res) => {
    const language = req.query.language;
    var condition = language ? { language: { [Op.like]: `%${language}%` } } : null;
  
    Language.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving languages."
        });
      });
  };