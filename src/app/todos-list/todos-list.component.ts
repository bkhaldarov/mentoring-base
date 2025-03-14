import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from '../todos-api.service';
import { Todo } from "../models/todo.model";
import { TodoService } from '../todo.service';
import { CreateTodoFormComponent } from "../create-todo-form/create-todo-form";

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
  readonly todosService = inject(TodoService);

  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todosService.setTodos(response);
      });
  }

  createTodo(formData: Todo){
    this.todosService.createTodo({
      userId: formData.userId,
      id: new Date().getTime(),
      title: formData.title,
      completed: formData.completed,
    }
  )
}

  deleteTodo(id: number) {
    this.todosService.deleteTodo(id);
  }
}
