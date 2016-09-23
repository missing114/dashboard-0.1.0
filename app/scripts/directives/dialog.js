'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button

angular.module('dashboard')
.directive('addDialog', function(){
	console.log("addDialog directive initialized");
	return {
		templateUrl: 'templates/addDialog.html'
	};
})
.directive('editDialog', function(){
	console.log("editDialog directive initialized");
	return {
		templateUrl: 'templates/editDialog.html'
	};
})
.directive('confirmBox',function (){
    console.log("confirmBox directive initialized");
    return{
        restrict:'A',
        templateUrl:'templates/confirmBox.html'
    };
})