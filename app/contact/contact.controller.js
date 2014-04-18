'use strict';

var ppp = angular.module('ppppropertiesApp');

ppp.controller('ContactCtrl', function ($scope, $http) {

    $scope.contact = [];

    // Get all data for the contactpage
    $http.get('/contact/contact.json').success(function(contact) {
            $scope.loaded = true;
            $scope.contact = contact;
    }).error(function(statusText) {
        // Alert if there's an error
        console.log(statusText);
    });

  });


function ContactFormCtrl($scope) {
	$scope.list = [];
	$scope.text = 'hello';
	$scope.submit = function() {
		if ($scope.text) {
			$scope.list.push(this.text);
			$scope.text = '';
		}
	};
}