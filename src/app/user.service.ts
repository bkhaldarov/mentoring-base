import { Injectable } from "@angular/core";
import { User } from "./models/user.model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class UserService {
  private userSubject$ = new BehaviorSubject<User[]>([]);
  users$ = this.userSubject$.asObservable();

  setUsers(users: User[]) {
    this.userSubject$.next(users);
  }

  editUser(editUser: User) {
    this.userSubject$.next(
      this.userSubject$.value.map(user =>
        user.id === editUser.id ? editUser : user
      )
    );
  }

  createUser(user: User) {
  const userExisting = this.userSubject$.value.find(
  (currentElement) => currentElement.email === user.email);

  if (userExisting !== undefined) {
  alert('ТАКОЙ EMAIL УЖЕ ЗАРЕГИСТРИРОВАН');
  } else {
  this.userSubject$.next([...this.userSubject$.value, user]);
  alert('Новый пользователь добавлен');
  }
}

  deleteUser(id: number) {
    this.userSubject$.next(
      this.userSubject$.value.filter(user => user.id !== id)
    );
  }
}
