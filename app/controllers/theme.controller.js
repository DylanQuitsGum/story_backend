const db = require("../models");
const Theme = db.theme;

exports.create = (theme) => {
    return Theme.create({
        theme: theme.theme,
    })
      .then((theme) => {
        console.log(">> Created Theme: " + JSON.stringify(theme, null, 4));
        return theme;
      })
      .catch((err) => {
        console.log(">> Error while creating Theme: ", err);
      });
  };

  exports.findAll = (req, res) => {
    const theme = req.query.theme;
    var condition = theme ? { theme: { [Op.like]: `%${theme}%` } } : null;
  
    Theme.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving themes."
        });
      });
  };