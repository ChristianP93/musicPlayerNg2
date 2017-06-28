
'use strict';

const express = require ('express');
const bodyParser = require ('body-parser');
const path = require ('path');
const methodOverride = require ('method-override');
const PORT = 4201;
const SERVER_NAME = 'localhost';

const app = express();
const routes = require ('./mp3/route')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());


//API
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use('/', routes);

const ServerListening = (req, res, next) => {
    console.log(SERVER_NAME + " listening on port: " + PORT + ".");
};

const server = app.listen(PORT, ServerListening);

process.on( 'SIGINT', () => {
  if (server) {
    console.log('Shutting down server');
    server.close();
  }
  return process.exit();
});
