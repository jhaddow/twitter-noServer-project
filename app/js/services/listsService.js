var app = angular.module('twitterListViewer');


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
