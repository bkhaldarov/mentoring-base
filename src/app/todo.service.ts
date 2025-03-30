import { Injectable } from "@angular/core";
import { Todo } from "./models/todo.model";
import { BehaviorSubject } from "rxjs";

@Injectable({providedIn: 'root'})
export class TodoService{
  private todoSubject$ = new BehaviorSubject<Todo[]>([]);
  todos$ = this.todoSubject$.asObservable();

  setTodos(todos: Todo[]){
    this.todoSubject$.next(todos);
  }

  editTodo(editTodo: Todo) {
    this.todoSubject$.next(
      this.todoSubject$.value.map(todo =>
        todo.id === editTodo.id ? editTodo : todo
      )
    );
  }

  createTodo(todo: Todo){
      const todoExisting = this.todoSubject$.value.find(
        (currentElement) => currentElement.title === todo.title);

        if (todoExisting !== undefined){
        alert('ТАКОЙ Title УЖЕ ЗАРЕГИСТРИРОВАН');
        } else {
        this.todoSubject$.next([...this.todoSubject$.value, todo]);
        alert('Новый пользователь добавлен');
        }
  }

  deleteTodo(id: number) {
    this.todoSubject$.next(
      this.todoSubject$.value.filter(todo => todo.id !== id)
    )
  }
}
