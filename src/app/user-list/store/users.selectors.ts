import { createSelector } from "@ngrx/store";
import { User } from "../../models/user.model";


export interface UserState{
  users: User[];
  counter: number,
  error: string | null,
}

interface AppState{
  users: UserState
}
export const selectUsersFeature = (state: AppState) => state.users;

export const selectUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.users,
);

export const selectCountUsers = createSelector(
  selectUsersFeature,
  (state: UserState) => state.counter,
);

export const selectErrorMsg = createSelector(
  selectUsersFeature,
  (state: UserState) => state.error,
);
