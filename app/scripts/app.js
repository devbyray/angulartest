'use strict';

var ppp = angular.module('ppppropertiesApp', [
  'ngResource',
  'ngCookies',
  'ngSanitize',
  'ngRoute'
]);

ppp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html'
    })
    .when('/home', {
      templateUrl: 'home/home.html'
    })
    .when('/property', {
      templateUrl: 'property/property.html'
    })
    .when('/contact', {
      templateUrl: 'contact/contact.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});
