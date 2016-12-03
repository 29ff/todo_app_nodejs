var app = angular.module("app.todos", ["xeditable"]);

app.controller("todoController", ["$scope", "svTodos", function ($scope, svTodos) {
    $scope.appName = "Node Todos";
    $scope.loadContainer = true;
    $scope.todos = [];

    // Load data from API
    svTodos.get().success(function (data) {
        $scope.todos = data;
        $scope.loadContainer = false;
    });

    $scope.createTodo = function () {
        $scope.loadContainer = true;
        if (!$scope.formData.text) {
            return false;
        } else {
            var todo = {
                text: $scope.formData.text,
                isDone: false
            }
            svTodos.create(todo).success(function (data){
                $scope.todos = data;
                $scope.formData.text = "";
                $scope.loadContainer = false;
            });
        }
    }

    $scope.updateTodo = function (todo) {
        $scope.loadContainer = true;
        svTodos.update(todo).success(function (data) {
            $scope.todos = data;
            $scope.loadContainer = false;
        });
    }

    $scope.deleteTodo = function (todo, $index) {
        $scope.loadContainer = true;
        svTodos.delete(todo._id).success(function (data) {
            $scope.todos = data;
            $scope.loadContainer = false;
        });
    }
}]);
