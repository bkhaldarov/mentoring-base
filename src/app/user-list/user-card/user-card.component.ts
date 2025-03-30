import { Component, EventEmitter, inject, Input, Output } from "@angular/core";
import { User } from "../../models/user.model";
import { MatDialog } from '@angular/material/dialog'
import { EditUserDialogComponent } from "../edit-user-dialog/edit-user-dialog.component";

@Component({
  selector: 'app-user-card',
  standalone: true,
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  @Input()
  user!: User;

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter()

  readonly dialog = inject(MatDialog);

  openDialog(): void {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: {user: this.user},
    });

    dialogRef.afterClosed().subscribe(editResult => {
      console.log('work');

      if(editResult){
        this.editUser.emit(editResult)
      }
    });
}

  onDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }
}
