var app = angular.module('twitterListViewer')

app.controller('loginCtrl', function($scope, $firebase, $location, authService){

	$scope.login = function() {
		
		authService.login()
		.then(function(authData){

			if(authData){
				console.log(authData);
			}
		});
	}

})