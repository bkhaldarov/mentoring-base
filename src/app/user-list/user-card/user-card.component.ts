import { Component, EventEmitter, Input, Output } from "@angular/core";
import { User } from "../user-list.component";

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

  onDeleteUser() {
    this.deleteUser.emit(this.user.id);
  }
}
