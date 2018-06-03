'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApplicationApp
 */
app.controller('TodoCtrl', function ($scope, $localStorage, authService, $rootScope) {
    if($localStorage.currentUser){
        //console.log($localStorage.currentUser)
        $rootScope.nickname = $localStorage.currentUser.email;
    } else {
        $rootScope.nickname = '';
    }

    $scope.isAuthenticated = authService.isAuthenticated;

    $scope.logoutUser = function(){
        authService.logout();
    }
    
});
