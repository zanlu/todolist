var express = require('express');
var todos = express.Router();
var controller = require('./controller.js');

//lista di tutto
todos.get('/', controller.getAll);

//dettaglio di uno 
todos.get('/:id', controller.getOne);

//creazione di un todo

todos.post('/', controller.create);

//modifica un todo

todos.put('/:id', controller.update);

//cancella un todo

todos.delete('/', controller.deleteOne);


module.exports = todos;