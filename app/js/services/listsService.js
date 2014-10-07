var app = angular.module('twitterListViewer');

app.service('listsService', function($q, $http, authService){

	this.getLists = function() {

		console.log(authData.twitter.accessToken);
		$http({
			method: 'JSONP',
			url:'https://api.twitter.com/1.1/statutes/home_timeline.json'
		}).then(function(data){
			console.log(data);
		});

	}
})