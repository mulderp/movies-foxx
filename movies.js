var Foxx = require("org/arangodb/foxx");
var app = new Foxx.Controller(applicationContext);
var console = require('console');
var internal = require('internal');
var _ = require('underscore');
var db = require("org/arangodb").db;

var Movies = require("./repositories/movies").Repository;
var Movie = require("./models/movie").Model;
var movies = new Movies(controller.collection("movies"), {
  model: Movie
});

app.get("/movies", function(req, res) {
  res.json([1,2,3]);
});


