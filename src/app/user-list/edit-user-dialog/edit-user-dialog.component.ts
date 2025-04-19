import { NgIf } from "@angular/common";
import { Component, inject } from "@angular/core";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MAT_DIALOG_DATA, MatDialog, MatDialogClose, MatDialogRef,} from '@angular/material/dialog'
import { MatDividerModule } from "@angular/material/divider";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { ChangeDetectionStrategy } from '@angular/core';
import { User } from "../../models/user.model";


@Component({
  selector: 'edit-user-dialog',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,MatIconModule,MatDialogClose, MatButtonModule,MatInputModule,FormsModule, MatFormFieldModule,MatDividerModule],
  templateUrl: './edit-user-dialog.component.html',
  styleUrl: './edit-user-dialog.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class EditUserDialogComponent{
  readonly data = inject<{user: User}>(MAT_DIALOG_DATA);

  public form = new FormGroup({
    name: new FormControl(this.data.user.name,[Validators.required, Validators.minLength(2)]),
    email: new FormControl(this.data.user.email,[Validators.required, Validators.email]),
    website: new FormControl(this.data.user.website,[Validators.required, Validators.minLength(3)]),
    phoneNumber: new FormControl(this.data.user.phoneNumber, [Validators.required, Validators.minLength(5)]),
    company: new FormGroup({
      name: new  FormControl(this.data.user.company.name, [Validators.required, Validators.minLength(2)]),
    })
  });

  get userWithUpdateFields(){
    return{
      ...this.form.value,
      id: this.data.user.id,
    };
  }
}
