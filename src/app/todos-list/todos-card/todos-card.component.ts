import { NgFor } from "@angular/common";
import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { Todo } from "../../models/todo.model";
import { MatDialog } from "@angular/material/dialog";
import { EditTodoDialogComponent } from "../edit-todo-dialog/edit-todo-dialog.component";

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

  @Output()
  editTodo = new EventEmitter()

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditTodoDialogComponent, {
      data: {todo: this.todo},
    });

    dialogRef.afterClosed().subscribe(editResult => {
      if(editResult){
        this.editTodo.emit(editResult)
      }
    });
}

  onDeleteTodo(todoId: number){
    this.deleteTodo.emit(todoId);
  }
}
