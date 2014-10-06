var app = angular.module('twitterListViewer', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: '/app/views/login.html',
		controller: 'loginCtrl'
	}).otherwise({
		redirectTo: '/login'
	});
});