/* eslint-disable no-undef */
var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/VinylMateDB', {
  useNewUrlParser: true
});

before((done) => {
  console.log('Connecting to test DB');
  mongoose
    .connect('mongodb://localhost:27017/VinylMateDBTest', {
      useNewUrlParser: true
    })
    .then(() => {
      console.log('Connected to test DB.');
      done();
    });
});

beforeEach((done) => {
  mongoose.connection.db.dropDatabase().then(() => done());
});

module.exports = { mongoose };
