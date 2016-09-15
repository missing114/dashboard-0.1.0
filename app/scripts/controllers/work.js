'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

angular.module('mainApp')
.controller('WorkController', function($scope, $http) {
    $http({
        method: 'GET', 
        url: '/api/work'
      }).success(function (response) {
        //Dig into the responde to get the relevant data
        // $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        $scope.works = response.works
    });;
});