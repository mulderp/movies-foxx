var Foxx = require("org/arangodb/foxx");
var app = new Foxx.Controller(applicationContext);
var console = require('console');
var internal = require('internal');
var _ = require('underscore');
var db = require("org/arangodb").db;

var Movies = require("./repositories/movies").Repository;
var Movie = require("./models/movie").Model;
var movies = new Movies(app.collection("movies"), {
  model: Movie
});

app.get("/all", function(req, res) {
  res.json(_.map(movies.allMovies(), function (movie) {
    return movie.forClient();
  }));
});

app.put("/:id", function(req, res) {
  var id = req.params("id"),
      vote = req.params("vote");

    res.json(movies.addVote(id, vote, 0));
  }).pathParam("id", {
    description: "The id of a Movie",
    type: "int"
  }).bodyParam("vote", "The vote of a user", Movie);


