'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile

(function() {
"use strict";

angular.module('dashboard').service('ProfileService', ProfileService);
console.log("ProfileService is initialized");
ProfileService.$inject = ['$http', '$window', 'SessionService'];
function ProfileService($http, $window, SessionService) {
  var s = this;

  /** get profile of the current logged user */
  s.getProfile = function() {
  	var params = {};
    var curUsername = SessionService.get();

  	return $http.get('/api/profile', params).then(function(response) {
        console.log(response);
        for (var i in response.data.profiles) {
          console.log(response.data.profiles[i], curUsername);
          if (response.data.profiles[i].username==curUsername) {
            return {
              'username': response.data.profiles[i].username,
              'nickname': response.data.profiles[i].nickname,
              'profileImage': response.data.profiles[i].profileImage
            }
          }
        }
        
      });
  
  };

  // return this;
}

})();