import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './create-todo-form.html',
  styleUrl: './create-todo-form.scss',
})

export class CreateTodoFormComponent{
  @Output()
  createTodo =new EventEmitter();

  public form = new FormGroup({
    userId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl(false, [Validators.required])
  });

  public submitForm():void {
    this.createTodo.emit(this.form.value)
    this.form.reset();
  }

}
