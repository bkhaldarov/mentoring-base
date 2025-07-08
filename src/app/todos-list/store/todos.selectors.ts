import { createSelector } from "@ngrx/store";
import { Todo } from '../../models/todo.model';

export interface TodoState{
  todos: Todo[];
}

interface AppState{
  todos: TodoState
}

// export interface UserState{
//   users: User[];
//   counter: number;
//   error: string | null;
// }

// interface AppState{
//   users: UserState;
// }
export const selectTodosFeature = (state: AppState ) => state.todos;

export const selectTodos = createSelector(
  selectTodosFeature,
  (state: TodoState) => state.todos
);
