// GETUSER SERVICE
// Description: Define the getUserService that has 1 functionality: 
// making service calls to retrieve the logged-in users' information
(function() {
"use strict";

angular.module('dashboard').service('getUserService', getUserService);
console.log("getUserService is initialized");
getUserService.$inject = ['$http', 'SessionService'];
function getUserService($http, SessionService) {
  var s = this;

  /** Get the full name of the current logged user */
  s.getFullname = function() {
    var params = {
      'user': SessionService.get(),
    };

    console.log(params);
    return $http.get('/api/getuser', 'params').then(function(response) {
    	// console.log(response);
      return response.data.name;
    });
  };

  // return this;
}

})();