import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { UsersApiService } from '../user-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from "../models/user.model";
import { UserService } from '../user.service';
import { CreateUserFormComponent } from '../create-user-form/create-user-form';

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
  readonly usersService = inject(UserService);

  constructor(){
    this.usersApiService.getUsers().subscribe(
      (response: User[]) => {
        this.usersService.setUsers(response);
      });
  }

  deleteUser(id: number) {
    this.usersService.deleteUser(id);
  }

  createUser(formData: User){
    this.usersService.createUser({
      id: new Date().getTime(),
      name: formData.name,
      email: formData.email,
      website:formData.website,
      company: {
        name: formData.name,
        },
      }
    )
  }
}


