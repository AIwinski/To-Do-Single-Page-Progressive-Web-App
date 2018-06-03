angular.module('todoApplicationApp')
  .controller('LoginCtrl', function ($scope, authService) {
      $scope.loginUser = function(){
          var email = $scope.email;
          var password = $scope.password;
          authService.login(email, password).then(response => {
            if(response.status === 200){
              $scope.message = 'User logged in successfully!';
            } else {
              $scope.message = 'Authentication error!';
            }
        });
      }
  });
