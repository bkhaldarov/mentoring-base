import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA,  MatDialog, MatDialogClose, MatDialogRef,} from '@angular/material/dialog'
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ChangeDetectionStrategy } from '@angular/core';
import { Todo } from "../../models/todo.model";
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'edit-todo-dialog',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, MatDialogModule, MatIconModule, MatButtonModule, MatInputModule, FormsModule, MatFormFieldModule, MatDividerModule],
  templateUrl: './edit-todo-dialog.component.html',
  styleUrl: './edit-todo-dialog.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EditTodoDialogComponent{
  readonly data = inject<{todo: Todo}>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('', [Validators.required])
  });

  get todoWithUpdateFields(){
    return{
      ...this.form.value,
      id: this.data.todo.id,
    };
  }
}
