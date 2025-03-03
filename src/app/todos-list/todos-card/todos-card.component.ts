import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Todo } from "../../models/todo.model";


@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
})

export class TodoCardComponent {
  @Input()
     todo!: Todo;

  @Output()
  deleteTodo = new EventEmitter<number>();

  onDeleteTodo(todoId: number){
    this.deleteTodo.emit(todoId);
  }
}
