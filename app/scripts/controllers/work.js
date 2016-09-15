'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

angular.module('dashboard')
.controller('WorkController', function($scope, $http) {
    $http({
        method: 'GET', 
        url: '/api/work'
      }).success(function (response) {
        $scope.works = response.works
    });;
});

