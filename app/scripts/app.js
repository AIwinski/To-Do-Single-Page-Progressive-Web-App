'use strict';

/**
 * @ngdoc overview
 * @name todoApplicationApp
 * @description
 * # todoApplicationApp
 *
 * Main module of the application.
 */
var app = angular
  .module('todoApplicationApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngStorage'
  ])
  .config(function ($routeProvider, $locationProvider, authServiceProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'register'
      })
      .when('/mytodos', {
        templateUrl: 'views/mytodos.html',
        controller: 'MytodosCtrl',
        controllerAs: 'mytodos'
      })
      .otherwise({
        redirectTo: '/'
      });

      authServiceProvider.config('http://localhost:3000'); //config api url

  }).run(function($rootScope, $http, $location, $localStorage){
    // keep user logged in after page refresh
    if ($localStorage.currentUser) {
      $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    }

    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        var publicPages = ['/login', '/', '/register'];
        var restrictedPage = publicPages.indexOf($location.path()) === -1;
        if (restrictedPage && !$localStorage.currentUser) {
            $location.path('/login');
        }
    });
  });