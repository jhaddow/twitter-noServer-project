var app = angular.module('twitterListViewer');

<<<<<<< HEAD
app.service('listsService', function($q, $http, $resource, authService, headersGenerator){

	this.getLists = function() {
		
		var url = "https://api.twitter.com/1.1/statuses/user_timeline.json&callback=JSON_CALLBACK";
		var headerKeys = '';
		// headersGenerator.getKeys('JSONP', url).then(function(result){

			//headerKeys = result;
			console.log(headerKeys);
		
			$http.jsonp(url
				)
				.then(function (data) {
					console.log(data);
				});
			
		// });
		
	};
		
});
=======
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
>>>>>>> parent of 8fd7a6d... I tried to generated headers for REST requests, but it didn't work
