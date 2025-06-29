import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from '../todos-api.service';
import { Todo } from "../models/todo.model";
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form";
import { Store } from '@ngrx/store';
import { TodosActions } from './store/todo.actions';
import { selectTodos } from './store/todos.selectors';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent, AsyncPipe, CreateTodoFormComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})

export class TodosListComponent {

  readonly todosApiService = inject(TodosApiService);
  private readonly store = inject(Store);
  public readonly todos$ = this.store.select(selectTodos);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {

        this.store.dispatch(TodosActions.set({todos: response}));
      });
  }

  createTodo(formData: Todo){
      this.store.dispatch(TodosActions.create({
        todo: {
        userId: formData.userId,
        id: new Date().getTime(),
        title: formData.title,
        completed: formData.completed,
        }
      }
    )
  )
}
editTodo(todo: Todo){
      this.store.dispatch(TodosActions.edit({todo}));
    }


  deleteTodo(id: number) {
    this.store.dispatch(TodosActions.delete({id}));
  }
}
