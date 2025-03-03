import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from '../todos-api.service';
import { Todo } from "../models/todo.model";


@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [NgFor, TodoCardComponent],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.scss'
})

export class TodosListComponent {
  readonly todosApiService = inject(TodosApiService);
  todos: Todo[] = [];
  constructor() {
    this.todosApiService.getTodos().subscribe(
      (response: Todo[]) => {
        this.todos = response;
      });
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
