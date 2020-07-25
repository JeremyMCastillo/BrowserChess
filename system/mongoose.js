/* eslint-disable no-undef */
var mongoose = require("mongoose");

let uri = "mongodb://localhost:27017/BrowserChessDB";

mongoose.Promise = global.Promise;

mongoose.connect(uri, { useNewUrlParser: true });
if (typeof before !== typeof undefined) {
  before((done) => {
    console.log("Connecting to test DB");
    mongoose
      .connect("mongodb://localhost:27017/BrowserChessDBTest", {
        useNewUrlParser: true,
      })
      .then(() => {
        console.log("Connected to test DB.");
        done();
      });
  });

  beforeEach((done) => {
    mongoose.connection.db.dropDatabase().then(() => done());
  });
}

module.exports = { mongoose };
