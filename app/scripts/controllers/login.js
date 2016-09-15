'use strict';
// LOGIN CONTROLLER
// Description: Define the following functionalities:
// Making service calls to login a user

// (function() {
// "use strict";

// angular.module('dashboard')
// .controller('LoginController', LoginController);
// console.log("dashboard LoginController is initialized");
// /**
//  * Handles login form credentials and redirects user to page.
//  */
// LoginController.$inject = ['$state', 'LoginService'];

// function LoginController($state, LoginService) {
//   var $ctrl = this;
//   $ctrl.username = '';
//   $ctrl.password = '';
//   $ctrl.error = '';

//   *
//    * Handles when user clicks the login button.

//   $ctrl.login = function() {
//     LoginService.login($ctrl.Usernameame, $ctrl.password).then(function(response) {
//       // Login successful
//       $state.go('root.work');
//       // SessionService.set($ctrl.username);
//     }, function(response) {
//       // Login failed
//       $ctrl.error = "Login Failed: Username and/or Password did not match.";
//     });
//   };

//   $ctrl.valid = function() {
//     return ($ctrl.username !== '' && $ctrl.password !== '');
//   };

// }

// })();

angular.module('dashboard')
    .controller('LoginController', function($scope, $http, $state) {
        $scope.username = '';
        $scope.password = '';
        $scope.error = '';
        $scope.valid = function() {
            return !($scope.username != '' && $scope.password != '');
        };

        $scope.submit = function() {
            $http({
                method: 'POST',
                url: '/api/login',
                data: {'userName': $scope.username,'password': $scope.password }
            }).then(function(response) {
                $state.go('root.work');
            }, function(response) {
                $scope.error =  "Username and password combination invalid, please try again!"
            });
        }
    });
