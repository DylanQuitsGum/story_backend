const bcrypt = require("bcrypt");
const saltRounds = 10;

async function encryptPassword(plainTextPassword) {
  try {
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds); // 10 is the salt rounds

    //save password to DB
    return hashedPassword;
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

async function comparePassword(plainTextPassword, hashedPassword) {
  try {
    const match = await bcrypt.compare(plaintextPassword, hash);
    return match; //true or false
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}

module.exports = {
  encryptPassword,
  comparePassword,
};
