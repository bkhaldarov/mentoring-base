import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';

function completedValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value?.trim().toLowerCase();
    if (value === 'да' || value === 'нет') {
      return null;
    }
    return { invalidCompleted: true };
  };
}

@Component({
  selector: 'app-create-todo-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatInputModule,MatFormFieldModule,FormsModule,MatRadioModule,MatIconModule],
  templateUrl: './create-todo-form.html',
  styleUrl: './create-todo-form.scss',
})

export class CreateTodoFormComponent{
  @Output()
  createTodo = new EventEmitter();
  public form = new FormGroup({
    id: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    userId: new FormControl('', [Validators.required, Validators.pattern("^[0-9]+$")]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    completed: new FormControl('', [Validators.required,completedValidator()])
  });

  public submitForm():void {
    this.createTodo.emit(this.form.value)
    this.form.reset();
  }
}
