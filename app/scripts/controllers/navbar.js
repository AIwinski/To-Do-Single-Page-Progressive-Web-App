'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:NavbarCtrl
 * @description
 * # RegisterCtrl
 * Controller of the todoApplicationApp
 */
angular.module('todoApplicationApp')
  .controller('NavbarCtrl', function ($scope, $localStorage, authService, $rootScope) {
    if($localStorage.currentUser){
        console.log($localStorage.currentUser)
        $rootScope.nickname = $localStorage.currentUser.email;
    } else {
        $rootScope.nickname = '';
    }

    $scope.isAuthenticated = authService.isAuthenticated;

    $scope.logoutUser = function(){
        authService.logout();
    }
    
  });
