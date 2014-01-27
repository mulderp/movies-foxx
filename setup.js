(function() {
  "use strict";
  var console = require("console"),
    db = require("org/arangodb").db,
    movies = applicationContext.collectionName("movies");

  if (db._collection(movies) === null) {
    db._create(movies);
  } else if (applicationContext.isProduction) {
    console.warn("collection '%s' already exists. Leaving it untouched.", movies);
  }
}());
