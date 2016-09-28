// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form

(function() {
    'use strict';

    angular.module('dashboard').controller('ContactController', ContactController);
    ContactController.$inject = ['$scope', '$window', '$timeout', 'ContactService'];
    function ContactController($scope, $window, $timeout, ContactService) {

        $scope.time = new Date();
        $scope.information = {
            firstname: "",
            lastname: "",
            email: "",
            tel: "",
            location: "",
            locations: []
        }
        $scope.query = {
            title: "",
            content: "",
            category: "",
            categories: [],
            priority: ""
        }

        $scope.rate = 7;
        $scope.max = 10;
        $scope.isReadonly = false;


        // star rating system hover to show span function
        $scope.hoveringOver = function(value) {
            $scope.overStar = value;
            $scope.query.priority = value;
            $scope.percent = 100 * (value / $scope.max);
        };

        $scope.infor_active = true;
        $scope.query_active = false;
        $scope.confirm_active = false;
        $scope.confirmation_number = Math.floor(Math.random() * 10000000000) + 1000000000 

        ContactService.getLocation().then(function(response) {
            // success store works 
            $scope.information.locations = response;

        }, function(response) {
            console.log("error!");
        });

        // http get category service 
        ContactService.getCategory().then(function(response) {
            // success store works 
            $scope.query.categories = response;

        }, function(response) {
            console.log("error!");
        });

        $scope.infor_submit = function() {
            $scope.infor_active = false;
            $scope.query_active = true;
            console.log($scope.information);
        }
        
        $scope.query_submit = function() {
            $scope.query_active = false;
            $scope.confirm_active = true;
            console.log($scope.query);
        }

        $scope.information_valid = function() {
            return !($scope.information.firstname != '' && $scope.information.lastname != '' && $scope.information.email != '' && $scope.information.tel != ''&& $scope.information.location != '');
        };

        $scope.query_valid = function() {
        	return $scope.information_valid() || !($scope.query.title != '' && $scope.query.content != '' && $scope.query.category != '' && $scope.query.priority != '');
        };
    }
})();