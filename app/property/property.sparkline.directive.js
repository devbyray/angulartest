'use strict';

var ppp = angular.module('ppppropertiesApp');

ppp.directive('ngSparkline', function() {
  return {
    restrict: 'AEC',
    template: '<div class="sparkline"></div>'
  }
});
