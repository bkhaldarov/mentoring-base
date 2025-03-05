import { Injectable } from "@angular/core";
import { Todo } from "./models/todo.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService{
  todoSubject$ = new BehaviorSubject<Todo[]>([]);

  setTodos(todos: Todo[]){
    this.todoSubject$.next(todos);
  }

  editTodo(editTodo: Todo){
    this.todoSubject$.next(
      this.todoSubject$.value.map(
        todo => {
          if(todo.id = editTodo.id){
            return editTodo;
          }else{
            return todo;
          }
        }
      )
    )
  }
  createTodo(todo: Todo){
    this.todoSubject$.next(
      [...this.todoSubject$.value, todo]
    )
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(
      this.todoSubject$.value.filter(todo => todo.id !== id)
    )
  }
}
