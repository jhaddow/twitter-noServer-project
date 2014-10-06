var app = angular.module('twitterListViewer')

app.controller('loginCtrl', function($scope, $firebase){

	var ref = new Firebase('https://twitter-list-viewer.firebaseio.com/');
	
	ref.authWithOAuthPopup("twitter", function(error, authData) { 

		console.log("error: ", error, "authData", authData);

	 });

})