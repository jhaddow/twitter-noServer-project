var app = angular.module('twitterListViewer');

app.service('listsService', function($q, $http, authService, headersGenerator){

	this.getLists = function() {
// 		var consumerKey = encodeURIComponent("71X5pnw5f3j4joC2OIiRXqW6V")
// 		var consumerSecret = encodeURIComponent('yzEEirfGIQshJvsOHp2RP4kRdnQU47gXMHnWPFIHXe2G7vNaaz');
// 		var credentials = (consumerKey + ':' + consumerSecret);
// ;
		
// 		 $http.get(
// 		  'https://api.twitter.com/oauth2/token'
// 		  , "grant_type=client_credentials"
// 		  , {headers: {'Authorization': 'Basic ' + credentials, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}}
// 		).then(function(result){
// 			console.log(result);
// 		});
		var url = "https://api.twitter.com/1.1/statuses/home_timeline.json";
		var headerKeys = '';
		headersGenerator.getKeys('GET', url).then(function(result){
			headerKeys = result;
			console.log(headerKeys);
			$http.get(url, 
				{headers: {
				  'Authorization': headerKeys
				  
				}})
				.then(function (data) {
					console.log(data);
				});
		})
		
		

	};
});