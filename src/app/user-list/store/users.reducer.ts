import { createReducer, on } from '@ngrx/store';
import { UserState } from './users.selectors';
import { UsersActions } from './user.actions';


const initialState: UserState  = {
  users: [],
  counter:0,
  error:null,
};

export const userReducer = createReducer(
  initialState,
  on(UsersActions.set, (state, payload) => ({
    ...state,
    users: payload.users,
  })),

  on(UsersActions.edit, (state, payload) => ({
    ...state,
    users: state.users.map((user) => {
      if (user.id === payload.user.id) {
        return payload.user;
      } else {
        return user;
      }
    }),
  })),

  on(UsersActions.create, (state, payload) => ({
    ...state,
    users: [...state.users, payload.user],
  })),

  on(UsersActions.delete, (state, payload) => ({
    ...state,
    users: state.users.filter((user) => user.id !== payload.id),
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
