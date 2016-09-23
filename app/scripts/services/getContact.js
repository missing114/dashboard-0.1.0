'use strict';
// GETCONTACT SERVICE
// Description: Define the contactService that has 2 functionalities: getLocation and getCategory 

(function() {
"use strict";

angular.module('dashboard').service('ContactService', ContactService);
console.log("ContactService is initialized");
ContactService.$inject = ['$http', '$window'];
function ContactService($http, $window) {
  var s = this;

  s.getLocation = function() {
    return $http.get('/api/location').then(function(response) {
        // console.log(response);
        return response.data.locations;
  	});
  };

  s.getCategory= function() {
    var params = {};

    return $http.get('/api/category', params).then(function(response) {
        return response.data.category;
    });
  };

  // return this;
}

})();