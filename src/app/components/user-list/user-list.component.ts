import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { HeaderComponent } from '../header/header.component';
import { HttpClient } from "@angular/common/http";

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [ NgFor, HeaderComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent {
  private readonly apiService = inject(HttpClient);
  users: User[] = [];
  constructor() {
    this.apiService.get<User[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe((users: User[]) => {
        this.users = users;
        // console.log('users:', this.users);
      }, (error) => {
        console.error('Ошибка при загрузке пользователей:', error);
      });
  }

  deleteUser(id: number) {
    this.users = this.users.filter(user => user.id !== id);
  }
}
