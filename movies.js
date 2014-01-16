var Foxx = require("org/arangodb/foxx");
var app = new Foxx.Controller(applicationContext);
var console = require('console');
var internal = require('internal');
var _ = require('underscore');
var db = require("org/arangodb").db;

var routes = require('routes').routes;

app.get("/movies", function(req, res) {
});

