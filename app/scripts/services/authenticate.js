// 'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

(function() {
"use strict";

angular.module('dashboard').service('LoginService', LoginService);
console.log("LoginService is initialized");
LoginService.$inject = ['$http', '$window'];
function LoginService($http, $window) {
  var s = this;

  /** Login and return a promise of the post */
  s.login = function(username, password) {
    var params = {
      'userName': username,
      'password': password,
    };
    console.log(params);
    return $http.post('/api/login', params).then(function(response) {
        return 'success';
      }, function(response){      
        return 'fail';
      });
  };

  /** Make request to log out */
  s.logout = function (sessionService) {
    sessionService.destroy();
    return;
    // $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
  };

  s.islogged = function() {
    return Boolean($window.sessionStorage.username!=undefined) || false;
  }

  // return this;
}

})();