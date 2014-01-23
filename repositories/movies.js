(function () {
  "use strict";
  var _ = require("underscore"),
  console = require("console"),
    Foxx = require("org/arangodb/foxx"),
    Movies;
    
var internal = require('internal');

  var _ = require("underscore");
  internal.print("*****");

  Movies = Foxx.Repository.extend({
   
    allMovies: function() {
    	return this.collection.toArray()
    		.map(function(m) {
    			return new this.modelPrototype(m);
    		}, this);
    },
    
    allGenres: function() {
    	var genres = {};
    	this.collection.toArray()
    		.each(function(m){
    			_.each(m.genres, function(g) {
    				if (!genres[g]) {
    					genres[g] = {
    						name: g,
    						count: 0
    					}
    				}
    				genres[g].count++;
    			});
    		});
    	return _.values(genres);
    },
    
    addVote: function(vote, movieId, userId) {
    	var res = this.collection.update(movieId, {
    		votes: {
    			userId: vote
    		}
    	});
    	if (res.error) {
    		// Some error handling
    		// Will be thrown if movieId is unknown
    	}
    	return true;
    },
    
    computeScore: function(movieId) {
    	var totalScore = 0;
    	var totalVotes = 0;
    	var m = this.collection.document(movieId);
    	_.each(m.votes, function(v) {
    		totalVotes++;
    		totalScore += v;
    	});
    	return totalScore/totalVotes;
    } 
  });

  exports.Repository = Movies;
}());
