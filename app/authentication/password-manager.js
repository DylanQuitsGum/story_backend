const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;

async function encryptPassword(plainTextPassword) {
  try {
    return await bcrypt.hash(plainTextPassword, SALT_ROUNDS); // 10 is the salt rounds
  } catch (error) {
    throw new Error("Error hashing password");
  }
}

async function comparePassword(plainTextPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
  } catch (error) {
    throw new Error("Error comparing passwords");
  }
}

module.exports = {
  encryptPassword,
  comparePassword,
};
