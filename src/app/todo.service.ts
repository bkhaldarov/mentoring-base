import { Injectable } from "@angular/core";
import { Todo } from "./models/todo.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService{
  private todoSubject = new BehaviorSubject<Todo[]>([]);
  todoSubject$ = this.todoSubject.asObservable();

  setTodos(todos: Todo[]){
    this.todoSubject.next(todos);
  }

  editTodo(editTodo: Todo) {
    this.todoSubject.next(
      this.todoSubject.value.map(todo =>
        todo.id === editTodo.id ? editTodo : todo
      )
    );
  }

  createTodo(todo: Todo){
    this.todoSubject.next(
      [...this.todoSubject.value, todo]
    )
  }

  deleteTodo(id: number) {
    this.todoSubject.next(
      this.todoSubject.value.filter(todo => todo.id !== id)
    )
  }
}
