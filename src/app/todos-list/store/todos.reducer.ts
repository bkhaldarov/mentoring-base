import { createReducer, on } from '@ngrx/store';
import { TodosActions } from '../store/todo.actions';
import { Todo } from '../../models/todo.model';


const initialState: { todos: Todo[] } = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,

  // Сохраняем массив пользователей
  on(TodosActions.set, (state, payload) => ({
    ...state,
    todos: payload.todos,
  })),

  // Редактируем пользователя
  on(TodosActions.edit, (state, payload) => ({
    ...state,
    todos: state.todos.map((todo) => {
      if (todo.id === payload.todo.id) {
        return payload.todo;
      } else {
        return todo;
      }
    }),
  })),

  // Создаем нового пользователя
  on(TodosActions.create, (state, payload) => ({
    ...state,
    todos: [...state.todos, payload.todo],
  })),

  // Удаляем пользователя
  on(TodosActions.delete, (state, payload) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== payload.id),
  }))
);
