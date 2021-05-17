"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.getTodos = exports.createTodo = void 0;
const todos_models_1 = require("../models/todos.models");
const TODOS = [];
const createTodo = (req, res, next) => {
    const text = req.body.text;
    // const text:string = req.body.text;
    const id = Math.floor(100000000 + Math.random() * 900000000).toString();
    const newTodo = new todos_models_1.Todo(id, text);
    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created', data: newTodo });
};
exports.createTodo = createTodo;
const getTodos = (req, res, next) => {
    res.status(201).json({ message: 'all todos', data: TODOS });
};
exports.getTodos = getTodos;
const getTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    res.json({ message: 'succeed', data: TODOS[todoIndex] });
};
exports.getTodo = getTodo;
const updateTodo = (req, res, next) => {
    const todoId = req.params.id;
    const updatedText = req.body.text;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS[todoIndex] = new todos_models_1.Todo(TODOS[todoIndex].id, updatedText);
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
};
exports.updateTodo = updateTodo;
const deleteTodo = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex);
    if (todoIndex < 0) {
        throw new Error('Could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};
exports.deleteTodo = deleteTodo;
