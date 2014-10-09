var app = angular.module('twitterListViewer');

app.service('authService', function($q, $http, $firebase, $firebaseSimpleLogin, environmentService){

	var firebaseEndpoint = environmentService.getEnv().firebase;
    var ref = new Firebase(firebaseEndpoint);
    var authClient = $firebaseSimpleLogin(ref);
    
	this.login = function() {
		var deferred = $q.defer();
		
		authClient.$login("twitter").then(function(authData) { 
			deferred.resolve(authData);
		}, function(error){
			console.error("Login failed: " + error);
			deferred.reject;
		});
				
		return deferred.promise;
	}
    
    this.logout = function() {
    	var deferred = $q.defer();

    	deferred.resolve(authClient.$logout());
    	return deferred.promise;
    }

    this.getStatus = function() {
    	var deferred = $q.defer();
   		promise = authClient.$getCurrentUser();
   		
   		promise.then(function(currentUser){
   			deferred.resolve(currentUser);
   		});

   		return deferred.promise;
    }
})

	