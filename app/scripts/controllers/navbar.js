'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:NavbarCtrl
 * @description
 * # RegisterCtrl
 * Controller of the todoApplicationApp
 */
angular.module('todoApplicationApp')
  .controller('NavbarCtrl', function ($scope, $localStorage, authService) {
    if($localStorage.currentUser){
        console.log($localStorage.currentUser)
        $scope.nickname = $localStorage.currentUser.email;
    } else {
        $scope.nickname = '';
    }

    $scope.isAuthenticated = authService.isAuthenticated;

    $scope.logoutUser = function(){
        authService.logout();
    }
    
  });
