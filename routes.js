
var routes = {
  allMovies: function() {
  
  	return this.collection.toArray()
  		.map(function(m) {
  			return new this.modelPrototyp(m);
  		});
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
};

module.exports = routes;
