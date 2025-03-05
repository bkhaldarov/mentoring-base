import { Injectable } from "@angular/core";
import { Todo } from "./models/todo.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService{
  private todo = new BehaviorSubject<Todo[]>([]);
  todo$ = this.todo.asObservable();

  setTodos(todos: Todo[]){
    this.todo.next(todos);
  }

  editTodo(editTodo: Todo) {
    this.todo.next(
      this.todo.value.map(todo =>
        todo.id === editTodo.id ? editTodo : todo
      )
    );
  }

  createTodo(todo: Todo){
    this.todo.next(
      [...this.todo.value, todo]
    )
  }

  deleteTodo(id: number) {
    this.todo.next(
      this.todo.value.filter(todo => todo.id !== id)
    )
  }
}
