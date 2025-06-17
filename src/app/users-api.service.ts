import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user.model";

@Injectable({ providedIn: "root" })
export class UsersApiService {
  readonly apiService = inject(HttpClient);

  getUsers() {
    return this.apiService.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
