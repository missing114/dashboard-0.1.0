'use strict';
/**
 * @ngdoc app
 * @name dashboard
 * @description
 * # dashboard
 *
 * Main module of the application. Define the routing architecture for the app
 */


var app = angular.module('workapp', ['ngRoute']);



app.controller('workcontroller', function($scope, $http) {
    $http({
        method : "GET",
        url : "/api/work"
    }).then(function mySucces(response) {
      //console.log('success');
      console.log(response);
        $scope.works = response.data.works;
    }, function myError(response) {
      console.log('error');
        $scope.myWelcome = response.statusText;
    });
});