angular.module('twitterListViewer')
  .factory('environmentService', function ($window) {
    return {
      getEnv: function () {
        return $window.env;
      }
    }
  });