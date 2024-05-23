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

  exports.findAll = () => {
    return Theme.findAll({
  
    })
    .then((themes) => {
      return themes;
    })
    .catch((err) => {
      console.log(">> Error retrieving themes: ", err);
    });
  };