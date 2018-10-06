var path = require('path');
var todos = require('../todos/todos.js');
var bodyparser = require('body-parser');

module.exports = function(express, app){
    app.use(bodyparser.json());

    app.get('/', function(req, res){
        res.sendFile(path.join(__dirname , '..','..', 'public','index.html'));

    app.use('/todos', todos)

    });
};