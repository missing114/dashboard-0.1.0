'use strict';
// WORK CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Work" section to display items and filter them

angular.module('dashboard')
.controller('workcontroller',['$scope','$http','$compile', function($scope, $http,$compile) {
    $http({
        method: 'GET', 
        url: '/api/work'
      }).success(function (response) {
        //Dig into the responde to get the relevant data
        // $scope.driversList = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        $scope.works = response.works
        console.log('in work controller');
    });

     $scope.popadd= function(){
    	
      // var compiledeHTML = $compile("<div addDialog></div>");
      // $("#main").append(compiledeHTML);
    };
    $scope.add=function(title,username,likes,comments){
    	    	console.log($('#TT').val());
    	    	console.log($('#UN').val());


    	$scope.works.push({

            id: '001',
            title: $('#TT').val(),
            author: $('#UN').val(),
            like: $('#LK').val(),
            comment: $('#CM').val(),
            image: ' '
        });
    };
    $scope.edit=function(target){
    	    var i = $scope.works.indexOf(target);
    	    $scope.works[i].title = $('#input1').val();
    	    $scope.works[i].author = $('#input2').val();
    	    $scope.works[i].like = $('#input3').val();
    	    $scope.works[i].comment = $('#input4').val();
    	    $scope.works[i].image = $('#input5').val();


    };
    $scope.delete=function(target){
        console.log(target);
    	var i = $scope.works.indexOf(target);
    	$scope.works.splice(i,1);

    };
    $scope.getdelete = function(work){
        console.log(work.title);
        $scope.deletetarget=work;
       


    };
    $scope.getwork = function(work){
    	console.log(work.title);
    	$scope.target=work;
    	$scope.i1Value= work.title; 
    	$scope.i2Value= work.author; 
    	$scope.i3Value= work.like;
    	$scope.i4Value= work.comment;
    	$scope.i5Value= work.image;


    };

    

}])
.directive('addDialog',function (){
	console.log("in directive");
	return{
		restrict:'A',
		templateUrl:'templates/addDialog.html'
		// templateUrl:"<div>dfdfdfdfweiofjwoeijfwief</div>"
	};
})
.directive('editDialog',function (){
	console.log("in edit directive");
	return{
		restrict:'A',
		templateUrl:'templates/editDialog.html'
		// templateUrl:"<div>dfdfdfdfweiofjwoeijfwief</div>"
	};
})
.directive('confirmBox',function (){
    console.log("in delete directive");
    return{
        restrict:'A',
        templateUrl:'templates/confirmBox.html'
        // templateUrl:"<div>dfdfdfdfweiofjwoeijfwief</div>"
    };
})

