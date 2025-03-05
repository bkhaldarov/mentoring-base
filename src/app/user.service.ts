import { Injectable } from "@angular/core";
import { User } from "./models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService{
  private userSubject = new BehaviorSubject<User[]>([]);
  userSubject$ = this.userSubject.asObservable();

  setUsers(users: User[]){
    this.userSubject.next(users);
  }

  editUser(editUser: User) {
    this.userSubject.next(
      this.userSubject.value.map(user =>
        user.id === editUser.id ? editUser : user
      )
    );
  }

  createUser(user: User){
    this.userSubject.next(
      [...this.userSubject.value, user]
    )
  }

  deleteUser(id: number) {
    this.userSubject.next(
      this.userSubject.value.filter(user => user.id !== id)
    )
  }
}
