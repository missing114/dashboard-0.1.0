'use strict';
// CONTACT CONTROLLER
// Description: Define the following functionalities:
// All the functionalities on the "Contact" section for the form
(function() {
"use strict";

angular.module('dashboard')
.controller('ContactController', ContactController);
console.log("ContactController is initialized");

ContactController.$inject = ['$scope', 'ContactService'];
function ContactController($scope, ContactService) {
	$scope.username = '';
  	$scope.usernickname = '';
  	$scope.userimg = '';

	
};

})();