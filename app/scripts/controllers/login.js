// 'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

(function() {
"use strict";

angular.module('dashboard')
.controller('LoginController', LoginController);
console.log("LoginController is initialized");
/**
 * Handles login form credentials and redirects user to page.
 */
LoginController.$inject = ['$scope', '$state', 'LoginService', 'SessionService'];
function LoginController($scope, $state, LoginService, SessionService) {
  $scope.username = '';
  $scope.password = '';
  $scope.error = '';

  /**
   * Handles when user clicks the login button.
   */
  $scope.login = function() {
    var res = LoginService.login($scope.username, $scope.password);
    res.then(function(response){
      
      // Login successful
      if (response=='success') {
        SessionService.set($scope.username);
        console.log(response); 
        $state.go('root.work');
      }
      // Login failed
      else {
        $scope.error = "Login Failed: Username and/or Password did not match.";
      }});
  };

  $scope.valid = function() {
    return ($scope.username !== '' && $scope.password !== '');
  };

}

})();