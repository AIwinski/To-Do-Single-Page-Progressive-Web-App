'use strict';

/**
 * @ngdoc service
 * @name todoApplicationApp.authService
 * @description
 * # authService
 * Provider in the todoApplicationApp.
 */

  app.provider('authService', function () {
    var API_URL = '';

    this.config = function (s) {
      API_URL = s;
    };

    this.$get = ['$http', '$localStorage', function ($http, $localStorage) {
      var authservice = {};

      authservice.login = function(email, password) {
        return $http.post(API_URL + '/users/login', {
          'email': email,
          'password': password
        }).then(response => {
           if(response.data.token){
              $localStorage.currentUser = { email: email, token: response.data.token };
              $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
           }
           return response;
        }).catch(error => {
          console.log(error);
          return error;
        });
      }

      authservice.register = function(email, password){
        return $http.post(API_URL + '/users/register', {
          'email': email,
          'password': password
        }).then(response => {
          return response;
        }).catch(error => {
          return error;
        });
      }

      authservice.logout = function() {
          delete $localStorage.currentUser;
          $http.defaults.headers.common.Authorization = '';
          //alert("wylogowano");
      }

      authservice.isAuthenticated = function() {
        if(!$localStorage.currentUser || $http.defaults.headers.common.Authorization === ''){
          return false;
        } else {
          return true;
        }
      }
      
      return authservice; 
    }];

  });
