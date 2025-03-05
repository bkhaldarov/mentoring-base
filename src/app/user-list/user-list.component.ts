import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { UsersApiService } from '../user-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from "../models/user.model";
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent, AsyncPipe],
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
}


