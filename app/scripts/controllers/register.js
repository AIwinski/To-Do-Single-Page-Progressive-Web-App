'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the todoApplicationApp
 */
angular.module('todoApplicationApp')
  .controller('RegisterCtrl', function ($scope, authService) {
      $scope.registerUser = function(){
          if($scope.password != $scope.rpassword){
            $scope.message = 'Password and repeated password are not equal!';
            return;
          } 
          var email = $scope.email;
          var password = $scope.password;
          authService.register(email, password).then(response => {
            if(response.status === 201){
              $scope.message = 'User registered successfully!';
            } else {
              $scope.message = 'Error occured!';
            }
        });
      }
  });
