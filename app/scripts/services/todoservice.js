'use strict';

/**
 * @ngdoc service
 * @name todoApplicationApp.todoService
 * @description
 * # todoService
 * Provider in the todoApplicationApp.
 */

  app.provider('todoService', function () {
    var API_URL = '';

    this.config = function (s) {
      API_URL = s;
    };

    this.$get = ['$http', '$localStorage',  function ($http, $localStorage) {
      var todoservice = {};

        todoservice.getAllTodos = function(){
            if(!$localStorage.currentUser){
                return;
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            return $http.get(API_URL + '/todos');
        }

        todoservice.addToDo = function(text){
            if(!$localStorage.currentUser){
                return;
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            return $http.post(API_URL + '/todos', {
                text: text
            });
        }

        todoservice.deleteToDo = function(id){
            if(!$localStorage.currentUser){
                return;
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            return $http.delete(API_URL + '/todos/' + id);
        }

        todoservice.editToDo = function(id, data){
            if(!$localStorage.currentUser){
                return;
            }
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
            return $http.patch(API_URL + '/todos/' + id, data);
        }
      
      return todoservice; 
    }];

  });
