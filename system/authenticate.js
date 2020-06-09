/* eslint-disable consistent-return */
const { Player } = require('../models/players');

var authenticate = (req, res, next) => {
  var token = req.header('x-auth');

  Player.findByToken(token)
    .then((user) => {
      if (!user) {
        return Promise.reject();
      }

      req.user = user;
      req.token = token;

      next();
    })
    .catch((e) => {
      res.status(401).send(e);
    });
};

module.exports = { authenticate };
