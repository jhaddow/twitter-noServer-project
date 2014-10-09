var app = angular.module('twitterListViewer')


app.controller('listsCtrl', function($scope, $firebase, $location, authService, listsService, headersGenerator){

	$scope.message = "You are logged in";

	$scope.logout = function() {
		authService.logout().then(function(){
			$location.path('/login');
		})
	}

	$scope.getLists = function() {
		listsService.getLists();
	}

	$scope.getHashKeys = function() {
		alert('hello');
		listsService.getLists();
	}
	
});