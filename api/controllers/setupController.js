var Todos = require("../models/todoModel");

module.exports = function (app) {
    app.get("/api/setupTodos", function (req, res) {
        // setup seed
        var seedTodos = [
            {
                text: "Học NodeJS",
                isDone: false
            },
            {
                text: "Học AngularJS",
                isDone: false
            },
            {
                text: "Viết một ứng dụng hoàn chỉnh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, function (err, results) {
            res.send(results);
        });
    });
}
