var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');

// Construct a config object based on json formatted settings.
const contents = fs.readFileSync(require.resolve('./config.json'));
var config = JSON.parse(contents);

var app = express();
const http = require('http').Server(app);

// Place the config object onto our request,
// making it easily accessible to our API routes.
app.use((req, res, next) => {
  req.config = config;
  next();
});
app.use(bodyParser.json());

// Routes are handled within each respective model
const modelsDir = './controllers/';
fs.readdir(modelsDir, (err, files) => {
  files.forEach((file) => {
    // eslint-disable-next-line import/no-dynamic-require
    require(`${modelsDir}${file}`).route(app, config);
  });

  http.listen(3030, () => {
    // eslint-disable-next-line no-console
    console.log('Listening on port 3030');
  });
});

module.exports = { app };
