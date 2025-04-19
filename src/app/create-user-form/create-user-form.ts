import { NgIf } from "@angular/common";
import { Component, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {ErrorStateMatcher} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-create-user-form',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,MatIconModule, MatButtonModule,MatInputModule,FormsModule, MatFormFieldModule,MatDividerModule],
  templateUrl: './create-user-form.html',
  styleUrl: './create-user-form.scss',
})

export class CreateUserFormComponent{
  @Output()
  createUser = new EventEmitter();
  public form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(2)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    website: new FormControl('',[Validators.required, Validators.minLength(3) ]),
    phoneNumber: new FormControl('',[Validators.required, Validators.minLength(5)]),
    company: new FormGroup({
      name: new FormControl('',[Validators.required])
    })
  });

  public submitForm():void {
    this.createUser.emit(this.form.value)
    this.form.reset();
  }
}
