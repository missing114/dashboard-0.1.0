'use strict';
// DIALOG DIRECTIVE
// Description: Define 2 directives in the app: addDialog and editDialog. 
// First one is for the "Add" button and the second one is for the "Edit" button


angular.module('dashboard')
.directive('addDialog', function(){
	console.log("in directive");
	return {
		templateUrl: 'templates/addDialog.html'
	};
})
.directive('editDialog', function(){
	console.log("in directive");
	return {
		templateUrl: 'templates/editDialog.html'
	};
})