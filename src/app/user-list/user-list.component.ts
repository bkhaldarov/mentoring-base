import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { UsersApiService } from '../users-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { IcreateUser, User } from "../models/user.model";
import { CreateUserFormComponent } from '../create-user-form/create-user-form';
import { Store } from '@ngrx/store';
import { UsersActions } from './store/user.actions';
import { selectCountUsers, selectErrorMsg, selectUsers } from './store/users.selectors';




@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent,CreateUserFormComponent, AsyncPipe],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})



export class UserListComponent {
  readonly usersApiService = inject(UsersApiService);
  private readonly store = inject(Store);
  public readonly users$ = this.store.select(selectUsers);
  public readonly usersCount$ = this.store.select(selectCountUsers);
  public readonly errorMessage$ = this.store.select(selectErrorMsg);

  // constructor(){
  //   this.usersApiService.getUsers().subscribe(
  //     (response: User[]) => {
  //       this.store.dispatch(UsersActions.set({users: response}));
  //     });
  // }




  onGetUserslengthBtnClick(): void {
    this.store.dispatch(UsersActions.initCounterByUsersLength());
  }
  

  deleteUser(id: number) {
    this.store.dispatch(UsersActions.delete({id}));
  }
  editUser(user: User){
    this.store.dispatch(UsersActions.edit({user}));
  }

  createUser(formData: IcreateUser){
      this.store.dispatch(
        UsersActions.create({
          user:{
            id: new Date().getTime(),
            name: formData.name,
            email: formData.email,
            website: formData.website,
            phone: formData.phone,
            company: {
              name: formData.company.name,
            },
          },
        })
      )
  }
}

