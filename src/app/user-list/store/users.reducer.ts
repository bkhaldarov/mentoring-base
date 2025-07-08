import { createReducer, on } from '@ngrx/store';
import { UserState } from './users.selectors';
import { UsersActions } from './user.actions';


const initialState: UserState  = {
  users: [],
  counter: 0,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.set, (state, {users}) => ({
    ...state,
    users: users,
  })),

  on(UsersActions.edit, (state, { user }) => ({
    ...state,
    users: state.users.map((u) =>
      u.id === user.id ? { ...u, ...user } : u
    ),
  })),

  on(UsersActions.create, (state, {user}) => ({
    ...state,
    users: [...state.users, user],
  })),

  on(UsersActions.delete, (state, {id}) => ({
    ...state,
    users: state.users.filter(user => user.id !== id),
  })),

on( UsersActions.initCounterByUsersLengthSuccess, (state, { users }) => ({
    ...state,
    counter: users.length,
    users,
  })),

on(UsersActions.initCounterByUsersLengthFailure, (state, { error }) => ({
    ...state,
    error,
  })),
);
