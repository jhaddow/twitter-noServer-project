var app = angular.module('twitterListViewer', ['ngRoute', 'firebase']);

app.config(function($routeProvider){
	$routeProvider.when('/login', {
		templateUrl: '/app/views/login.html',
		controller: 'loginCtrl'
	}).when('/twitter-lists', {
		templateUrl: '/app/views/twitter-lists.html',
		controller: 'listsCtrl'
	})

	.otherwise({
		redirectTo: '/login'
	});
});

app.run(function($rootScope, $location, authService){
	$rootScope.$on('$routeChangeStart', function(event, next, current){
    	var isLoggedIn = authService.getStatus();
    	if(!isLoggedIn){
    		$location.path('/login');
    	}
  });
});