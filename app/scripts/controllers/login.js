'use strict';
// LOGIN CONTROLLER 
// Description: Define the following functionalities:
// Making service calls to login a user

angular.module('dashboard')
    .controller('LoginController', function($scope, $http, $state, SessionService) {
        $scope.username = '';
        $scope.password = '';
        $scope.error = '';
        $scope.valid = function() {
            console.log($scope.username);
            console.log($scope.password);
            return !($scope.username != '' && $scope.password != '');
        };
        $scope.submit = function() {
            $http({
                method: 'POST',
                url: '/api/login',
                data: { 'userName': $scope.username,'password': $scope.password}
            }).then(function(response) {
                console.log("1");
                SessionService.set($scope.username);
                $state.go('root.work');
            }, function(response) {
                $scope.error =  "Username and password combination invalid, please try again!"
            });
        }
    })
