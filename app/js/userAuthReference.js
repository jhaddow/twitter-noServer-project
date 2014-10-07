register: function (mentorInfo) {
              var deferred = $q.defer();
              firebaseSimpleLogin.$createUser(mentorInfo.email, mentorInfo.password).then(function (user) {
                  // Create our own custom user object to house the user's data
                  var userObject = $firebase(new Firebase(firebaseEndpoint + '/users/' + user.id)).$asObject();
                  userObject.email = mentorInfo.email;
                  userObject.name = mentorInfo.name;
                  userObject.title = mentorInfo.title;
                  userObject.status = 'Away';
                  userObject.$save().then(deferred.resolve, deferred.reject);

              }, deferred.reject);

              return deferred.promise;
          },