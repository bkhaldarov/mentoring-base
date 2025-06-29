import { createAction, createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from "../../models/user.model";

export const UsersActions = createActionGroup({
  source: 'Users',
  events: {
    'set': props<{ users: User[] }>(),
    'edit': props<{ user: User }>(),
    'create': props<{ user: User }>(),
    'delete': props<{ id: number }>(),

    'loadUsers': emptyProps(),
    'initCounterByUsersLength': emptyProps(),
    'initCounterByUsersLengthSuccess': props<{ users: User[] }>(),
    'initCounterByUsersLengthFailure': props<{ error: string }>(),
  },
});
