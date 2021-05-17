import { RequestHandler } from 'express';

import { Todo } from '../models/todos.models';

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    // const text:string = req.body.text;
    const id = Math.floor(100000000 + Math.random() * 900000000).toString();
    const newTodo = new Todo(id, text);
    TODOS.push(newTodo);

    res.status(201).json({message: 'Created', data: newTodo})
}

export const getTodos: RequestHandler = (req, res, next) => {
  
    res.status(201).json({message: 'all todos', data: TODOS})
}


export const getTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
  
  
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex)

    if (todoIndex < 0) {
      throw new Error('Could not find todo!');
    }
    
    res.json({ message: 'succeed', data: TODOS[todoIndex] });
  };

  
export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
    const todoId = req.params.id;
  
    const updatedText = (req.body as { text: string }).text;
  
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);
    console.log(todoIndex)

    if (todoIndex < 0) {
      throw new Error('Could not find todo!');
    }
  
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
  
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex] });
  };
  
  export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
  
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    console.log(todoIndex)
  
    if (todoIndex < 0) {
      throw new Error('Could not find todo!');
    }
  
    TODOS.splice(todoIndex, 1);
  
    res.json({ message: 'Todo deleted!' });
  };
  

