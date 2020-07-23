/* eslint-disable no-undef */
var mongoose = require('mongoose');
var fs = require('fs');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

// Construct a config object based on json formatted settings.
const contents = fs.readFileSync(require.resolve('../config.json'));
var config = JSON.parse(contents);

let uriBuilder = new Promise((resolve, reject) => {
  let uri = 'mongodb://localhost:27017/BrowserChessDB';
  if (config.noMongo) {
    mongod.getConnectionString().then((response) => resolve(response));
    console.log(uri);
  } else {
    resolve(uri);
  }
});

mongoose.Promise = global.Promise;
uriBuilder.then((uri) => {
  mongoose.connect(uri, { useNewUrlParser: true });
  if (typeof before !== typeof undefined) {
    before((done) => {
      console.log('Connecting to test DB');
      mongoose
        .connect('mongodb://localhost:27017/BrowserChessDBTest', {
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
  }
});

module.exports = { mongoose };
