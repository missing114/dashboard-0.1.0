'use strict';
// ROOT CONTROLLER
// Description: Define the following functionalities:
// Make service calls to retrieve user's informationto display on the header
// Make service calls to log the user out of the app
// Populate the current date that the user log in

angular.module('dashboard')
.controller('RootController', RootController);
console.log("Root controller initialized");

RootController.$inject = ['$scope', '$state', 'LoginService', 'SessionService', 'getUserService'];
function RootController($scope, $state, LoginService, SessionService, getUserService) {
    $scope.today = new Date();
    
    var getUserCall = getUserService.getResource().get({'user': SessionService.get()}, function(response) {
        console.log(response);
        $scope.username = response.name; 
    });
    // console.log($scope.username);
    
    $scope.logout = function(){
    	$.when(LoginService.logout(SessionService)).then(function() {
    		// console.log(LoginService.islogged(), $window.sessionStorage.SessionMessage);
    		$state.go('login');
    	});	
    };
};