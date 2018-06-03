'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:MytodosCtrl
 * @description
 * # MytodosCtrl
 * Controller of the todoApplicationApp
 */
angular.module('todoApplicationApp')
  .controller('MytodosCtrl', function ($scope, todoService) {
    

    $scope.todos = [];
    getAllTodos();
      
    function getAllTodos(){
      todoService.getAllTodos().then(response => {
        if(response.status === 200){
          //console.log(response);
          $scope.todos = response.data.todos;
        } else if(response.status === 401){
          //auth error
        } else if(response.status === 500){
          //internal server error
        } else if(response.status === 404){
          //not found
        }
      });

      $scope.addToDo = function(){
        todoService.addToDo($scope.newToDo).then(response => {
          if(response.status === 201){
            $scope.todos.push(response.data.createdTodo);
            $scope.newToDo = '';
          } else if(response.status === 500){
              //error
          }
        })
      }
    }


      


  });
