import { Router } from 'express';
import {getTodos, createTodo, getTodo , updateTodo, deleteTodo } from '../controllers/todos.controllers'
const router = Router();

router.get('/', getTodos);
router.post('/', createTodo);
router.get('/:id', getTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);

export default router;