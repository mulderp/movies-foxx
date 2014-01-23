(function () {
  "use strict";
  var Foxx = require("org/arangodb/foxx"),
    Movie;

  Movie = Foxx.Model.extend({
  }, {
    attributes: {
      description: "string",
      title: "string",
    }
  });
  exports.Model = Movie;
}());
