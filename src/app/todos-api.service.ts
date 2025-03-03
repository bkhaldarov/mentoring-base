import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./models/todo.model";

@Injectable({ providedIn: "root"})
export class TodosApiService {
   readonly apiService=inject(HttpClient)

  getTodos() {
    return this.apiService.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
