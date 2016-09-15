// 'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

(function() {
"use strict";

angular.module('admin', [])
.controller('LoginController', LoginController);
console.log("admin LoginController is initialized");
/**
 * Handles login form credentials and redirects user to page.
 */
LoginController.$inject = ['$state', 'LoginService', 'SessionService'];
function LoginController($state, LoginService, SessionService) {
  var $ctrl = this;
  $ctrl.username = '';
  $ctrl.password = '';
  $ctrl.error = '';

  /**
   * Handles when user clicks the login button.
   */
  $ctrl.login = function() {
    LoginService.login($ctrl.username, $ctrl.password).then(function(response) {
      // Login successful
      $state.go('main.work');
      SessionService.set($ctrl.username);
    }, function(response) {
      // Login failed
      $ctrl.error = "Login Failed: Username and/or Password did not match.";
    });
  };

  $ctrl.valid = function() {
    return ($ctrl.username !== '' && $ctrl.password !== '');
  };

}

})();