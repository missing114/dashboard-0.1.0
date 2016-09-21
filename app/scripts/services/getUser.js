// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information
(function() {
"use strict";

angular.module('dashboard').service('getUserService', getUserService);
console.log("getUserService is initialized");
getUserService.$inject = ['$resource', 'SessionService'];
function getUserService($resource, SessionService) {
  var s = this;

  /** Get the full name of the current logged user */
  s.getResource = function() {
    return $resource('/api/getuser')
  };

  // return this;
}

})();