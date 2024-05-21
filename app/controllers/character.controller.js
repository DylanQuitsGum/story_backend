const db = require("../models");
const Character = db.character;

// Create and Save a new Character
exports.create = (character) => {
  return Character.create({
    firstName: character.firstName,
    lastName: character.lastName,
  })
  .then((character) => {
    console.log('>> Created Character: ' + JSON.stringify(character,null,2));
    return character;
  })
  .catch((err) => {
    console.log('>> Error while creating Character: ', err);
  });
};
