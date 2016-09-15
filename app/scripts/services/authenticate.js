(function() {
"use strict";

angular.module('dashboard').service('LoginService', LoginService);

console.log("dashboard LoginService is initialized");

LoginService.$inject = ['$http', '$window'];

function LoginService($http, $window, ApiPath) {
  var service = this;
  var islogged = false;
  /** Login and create session when succeeded */
  service.login = function(username, password) {
    var params = {
      'username': username,
      'password': password,
    };

    $http.post( '/api/login', params).then(function(response) {
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