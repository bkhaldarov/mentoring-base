import { Injectable } from "@angular/core";
import { User } from "./models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService{
  private user = new BehaviorSubject<User[]>([]);
  user$ = this.user.asObservable();

  setUsers(users: User[]){
    this.user.next(users);
  }

  editUser(editUser: User) {
    this.user.next(
      this.user.value.map(user =>
        user.id === editUser.id ? editUser : user
      )
    );
  }

  createUser(user: User){
    this.user.next(
      [...this.user.value, user]
    )
  }

  deleteUser(id: number) {
    this.user.next(
      this.user.value.filter(user => user.id !== id)
    )
  }
}
