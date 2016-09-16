'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

angular.module('dashboard')
    .controller('WorkController', function($scope, $http) {
        $scope.show = "card";
        $http({
            method: 'GET',
            url: '/api/work'
        }).success(function(response) {
            $scope.works = response.works;

        });
        $scope.add = function() {
            $scope.works.push({
                title: $scope.add_title,
                author: $scope.add_author,
                like: $scope.add_like,
                comment: $scope.add_comment
            });
        };

        $scope.edit = function() {
            $scope.works.push({
                title: $scope.add_title,
                author: $scope.add_author,
                like: $scope.add_like,
                comment: $scope.add_comment
            });
        };
    });
