'use strict';
// GETPROFILE SERVICE
// Description: Define the profileService that has 1 functionality: getProfile

(function() {
"use strict";

angular.module('dashboard').service('ProfileService', ProfileService);
console.log("ProfileService is initialized");
ProfileService.$inject = ['$http', '$window', 'SessionService'];
function ProfileService($http, $window) {
  var s = this;

  /** get profile of the current logged user */
  s.getProfile = function() {
  	var params = {};

  	// return $http.post('/api/getuser', params).then(function(response) {
   //      for (var profile in response) {
   //      	// if (profile.username==s.)
   //      }
        
   //    });
  
  };

  // return this;
}

})();