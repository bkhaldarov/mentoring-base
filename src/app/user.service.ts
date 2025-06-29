import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IUser {
  name: string;
  email: string;
  isAdmin: boolean | null;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly userSubjects$ = new BehaviorSubject<IUser | null>(null);
  public readonly user$ = this.userSubjects$.asObservable();

  private user: IUser = {
    name: 'Bobur',
    email: 'bobur@gmail.com',
    isAdmin: null
  };

  loginAsAdmin() {
    this.userSubjects$.next({ ...this.user, isAdmin: true });
  }

  loginAsUser() {
    this.userSubjects$.next({ ...this.user, isAdmin: false });
  }

  get isAdmin(){
    return this.userSubjects$.value?.isAdmin;
  }

  logOut(){
    this.userSubjects$.next(null);
  }
}
