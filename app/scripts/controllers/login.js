angular.module('todoApplicationApp')
  .controller('LoginCtrl', function ($scope, authService, $rootScope) {
      $scope.loginUser = function(){
          var email = $scope.email;
          var password = $scope.password;
          authService.login(email, password).then(response => {
            if(response.status === 200){
              $scope.message = 'User logged in successfully!';
              $rootScope.nickname = email;
            } else {
              $scope.message = 'Authentication error!';
              $rootScope.nickname = '';
            }
        });
      }
  });
