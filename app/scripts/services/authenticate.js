// 'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

(function() {
"use strict";

angular.module('mainApp').service('LoginService', LoginService);
console.log("mainApp LoginService is initialized");
LoginService.$inject = ['$http', '$window'];
function LoginService($http, $window) {
  var s = this;
  var islogged = false;
  /** Login and return a promise of the post */
  s.login = function(username, password) {
    var params = {
      'userName': username,
      'password': password,
    };

    return $http.post('/api/login', params).then(function(response) {
        s.islogged = true;
        return 'success';
      }, function(response){      
        s.islogged = false;
        return 'fail';
      });
  };

  /** Make request to log out */
  s.logout = function () {
    Session.destroy();
    // $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
  };
}

})();