import { createReducer, on } from '@ngrx/store';
import { TodosActions } from '../store/todo.actions';
import { TodoState } from './todos.selectors'


const initialState: TodoState = {
  todos: [],
};

export const todoReducer = createReducer(
  initialState,

  on(TodosActions.set, (state, {todos}) => ({
    ...state,
    todos: todos,
  })),

  on(TodosActions.edit, (state, {todo}) => ({
    ...state,
    todos: state.todos.map((t) =>
      t.id === todo.id ? {...t,...todo}: t
    ),
  })),

  on(TodosActions.create, (state, {todo}) => ({
    ...state,
    todos: [...state.todos, todo],
  })),

  on(TodosActions.delete, (state, {id}) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
);
