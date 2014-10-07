var app = angular.module('twitterListViewer');

app.service('authService', function($q, $http, $firebase, $firebaseSimpleLogin, environmentService){

	var firebaseEndpoint = environmentService.getEnv().firebase;
    var ref = new Firebase(firebaseEndpoint);
    var authClient = $firebaseSimpleLogin(ref);
    var authRef = new Firebase(firebaseEndpoint + "/.info/authenticated");
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
    	deferred.resolve(authClient.logOut());
    	return deferred.promise;
    }

    this.getStatus = function() {
   
    	authRef.on("value", function(status){
    		return status;
    	} )
    }
})

	