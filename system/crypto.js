const crypto = require('crypto');
const jwt = require('jsonwebtoken');

var genRandomString = function (length) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length); /** return required number of characters */
};

var sha512 = function (password, salt) {
  var hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
  hash.update(password);
  var value = hash.digest('hex');
  return {
    salt,
    passwordHash: value
  };
};

module.exports = {
  genRandomString,
  sha512,
  sign: jwt.sign,
  verify: jwt.verify
};
