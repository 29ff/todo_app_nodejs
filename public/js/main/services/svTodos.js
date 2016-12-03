var app = angular.module("app.todos");

app.factory("svTodos", ["$http", function ($http) {
    return {
        get: function () {
            return $http.get("/api/todo");
        },
        create: function (todo) {
            return $http.post("/api/todo", todo);
        },
        update: function (todo) {
            return $http.put("/api/todo", todo);
        },
        delete: function (id) {
            return $http.delete("/api/todo/" + id);
        }
    }
}])
