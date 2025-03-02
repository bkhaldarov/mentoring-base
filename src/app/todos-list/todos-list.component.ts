import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from "@angular/common";
import { TodoCardComponent } from "./todos-card/todos-card.component";
import { TodosApiService } from '../todos-api.service';

export interface Todo{
  userId:number;
  id:number;
  title:string;
  completed:boolean;
}

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
      (response: any) => {
        this.todos = response;
      }
    );
  }

  deleteTodo(id: any) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
