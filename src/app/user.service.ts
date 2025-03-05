import { Injectable } from "@angular/core";
import { User } from "./models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class UserService{
  userSubject$ = new BehaviorSubject<User[]>([]);

  setUsers(users: User[]){
    this.userSubject$.next(users);
  }

  editUser(editUser: User){
    this.userSubject$.next(
      this.userSubject$.value.map(
        user => {
          if(user.id = editUser.id){
            return editUser;
          }else{
            return user;
          }
        }
      )
    )
  }

  createUser(user: User){
    this.userSubject$.next(
      [...this.userSubject$.value, user]
    )
  }

  deleteUser(id: number) {
    this.userSubject$.next(
      this.userSubject$.value.filter(user => user.id !== id)
    )
  }
}
