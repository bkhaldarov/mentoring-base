import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { HeaderComponent } from '../components/header/header.component';
import { HttpClient } from "@angular/common/http";
import { UsersApiService } from '../user-api.service';
import { UserCardComponent } from "./user-card/user-card.component";
import { User } from "../models/user.model";


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor, UserCardComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  readonly usersApiService = inject(UsersApiService);
  users: User[] = [];
  constructor(){
    this.usersApiService.getUsers()
      .subscribe((response: User[]) => {
        this.users = response;
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
export { User };

