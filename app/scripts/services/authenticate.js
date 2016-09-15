// 'use strict';
// AUTHENTICATE SERVICE
// Description: Define the authenticateService that has 3 functionalities: login, logout, and islogged 

(function() {
"use strict";

angular.module('mainApp').service('LoginService', LoginService);
console.log("mainApp LoginService is initialized");
LoginService.$inject = ['$http', '$window', 'ApiPath'];
function LoginService($http, $window, ApiPath) {
  var service = this;
  var islogged = false;
  /** Login and create session when succeeded */
  service.login = function(username, password) {
    var params = {
      'username': username,
      'password': password,
    };

    $http.post(ApiPath + '/', params).then(function(response) {
      if (response.data.authentication=='success'){
        service.islogged = true;
        return 'success'
      }
      else if (response.data.authentication=='fail') {
        service.islogged = false;
        return 'fail'
      };
    });
  };

  /** Make request to log out */
  service.logout = function () {
    Session.destroy();
    // $rootScope.$broadcast(AUTH_EVENTS.logoutSuccess);
    // return $http.post(ApiPath + '/', params);
  };
}

})();