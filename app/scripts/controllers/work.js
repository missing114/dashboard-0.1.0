'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

angular.module('dashboard')
    .controller('WorkController', function($scope, $http) {
        $scope.show = 'card';
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
            $scope.add_title = '';
            $scope.add_author = '';
            $scope.add_like = '';
            $scope.add_comment = '';
        };

        $scope.edit = function() {
            var i = $scope.works.indexOf($scope.target);
            $scope.works[i].title = $scope.edit_title;
            $scope.works[i].author = $scope.edit_author;
            $scope.works[i].like = $scope.edit_like;
            $scope.works[i].comment = $scope.edit_comment;
        }

        // $scope.delete = function() {
        //     $scope.works.push({
        //         title: $scope.add_title,
        //         author: $scope.add_author,
        //         comment: $scope.add_comment
        //     });
        // };

        $scope.delete = function() {
        	var i = $scope.works.indexOf($scope.target);
            $scope.works.splice(i, 1);
        };


        $scope.getwork = function(work) {
            console.log(work);
            $scope.target = work;
            $scope.edit_title = work.title;
            $scope.edit_author = work.author;
            $scope.edit_like = work.like;
            $scope.edit_comment = work.comment;
        };
    });
