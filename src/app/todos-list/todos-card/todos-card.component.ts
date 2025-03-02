import { NgFor } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector: 'app-todo-card',
  standalone: true,
  templateUrl: './todos-card.component.html',
  styleUrl: './todos-card.component.scss',
})

export class TodoCardComponent {
  @Input()
     todo: any;

  @Output()
  deleteTodo = new EventEmitter();

  onDeleteTodo(todoId: any){
    this.deleteTodo.emit(todoId);
  }
}
