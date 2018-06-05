'use strict';

/**
 * @ngdoc function
 * @name todoApplicationApp.controller:TodoCtrl
 * @description
 * # TodoCtrl
 * Controller of the todoApplicationApp
 */
app.controller('TodoCtrl', function ($scope, todoService) {
    var thisTodo = $scope.$parent.todos[$scope.$index];
    $scope.delete = function(){
        var id = thisTodo._id;
        todoService.deleteToDo(id).then(response => {
            if(response.status === 200){
                console.log($scope.$parent.todos);
                $scope.$parent.todos.splice($scope.$index, 1);
            } else {
                //server error
            }
        });
    }    

    $scope.markAsDone = function(){
        var id = thisTodo._id;
        var completed = !thisTodo.completed;
        todoService.editToDo(id, {completed: completed}).then(response => {
            if(response.status === 200){
                $scope.$parent.todos[$scope.$index].completed = completed;
            }
        });
    }
});
