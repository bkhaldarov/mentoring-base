import { NgFor, NgIf } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import {  Component, inject } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list-component.html',
  styleUrl: './users-list-component.scss',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
})

export class UserListComponent{
  readonly apiService = inject(HttpClient)
  users: any = []
  constructor(){
    this.apiService.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (response: any) => {
        this.users = response;
        console.log('users:', this.users)
      },
    )
  }

  // deleteUser(id: number){
  //   this.users=this.users.filter(
  //          //@it's ignor
  //     (item:{id: number}) => {
  //       if(id === item.id){
  //         return false;
  //       }else{
  //         return true;
  //       }
  //     }
  //   )
  // }
  deleteUser(id: number){
  this.users = this.users.filter(
    (item: { id: number; }) => item.id !== id);
  }
}

