setup.js:
(function() {
  "use strict";
  var console = require("console"),
    db = require("org/arangodb").db,
    todos = applicationContext.collectionName("movies");

  if (db._collection(todos) === null) {
    db._create(todos);
  } else if (applicationContext.isProduction) {
    console.warn("collection '%s' already exists. Leaving it untouched.", todos);
  }
}());
