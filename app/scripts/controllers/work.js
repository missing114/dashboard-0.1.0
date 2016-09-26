(function() {
    'use strict';
    // WORK CONTROLLER
    // Description: Define the following functionalities:
    // All the functionalities on the "Work" section to display items and filter them

    angular.module('dashboard')
        .controller('WorkController', WorkController);


    WorkController.$inject = ['$scope', '$http', 'getWorkService'];

    // controller for works
    function WorkController($scope, $http, getWorkService) {
        $scope.show = 'card';
        // http to get data from server
        getWorkService.getworks().then(function(response) {
            // success store works 
            $scope.works = response.data.works;
        }, function(response) {
            console.log("error!");
        });

        // works add action
        $scope.add = function() {
            var add_work = getWorkService.addWork($scope.add_title, $scope.add_author, $scope.add_like, $scope.add_comment);
            $scope.works.push(add_work);
        };

        // works edit action
        $scope.edit = function() {
            var i = $scope.works.indexOf($scope.target);
            $scope.works[i].title = $scope.edit_title;
            $scope.works[i].author = $scope.edit_author;
            $scope.works[i].like = $scope.edit_like;
            $scope.works[i].comment = $scope.edit_comment;
        }

        $scope.delete = function() {
            var i = $scope.works.indexOf($scope.target);
            $scope.works.splice(i, 1);
        };

        $scope.getwork = function(work) {
            $scope.target = work;
            $scope.edit_title = $scope.target.title;
            $scope.edit_author = $scope.target.author;
            $scope.edit_like = $scope.target.like;
            $scope.edit_comment = $scope.target.comment;
        };
    }

})();
