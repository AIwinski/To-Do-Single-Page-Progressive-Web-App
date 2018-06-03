'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApplicationApp
 */
angular.module('todoApplicationApp')
  .controller('MainCtrl', function ($scope, $location, authService) {

    $scope.isAuthenticated = authService.isAuthenticated;
  });
