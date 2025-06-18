import { Component, inject } from '@angular/core';
import { AsyncPipe, DatePipe, NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RedDirective } from '../../directives/red.directive';
import { GreenDirective } from '../../directives/green.directive';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../auth/auth.component';
import { UserService } from '../../user.service';
import { pipe } from 'rxjs';


const newPages = [5,4,3,2,1];

const aboutCompanyFn=(text:string)=>text;
const aboutCompany=aboutCompanyFn('О компании');

const menuItems = ['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']

const UpperCaseMenuItems=menuItems.map(
  (items:string)=>{
    return items.toUpperCase();
  }
)

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ NgIf, NgFor,RouterLink,GreenDirective, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  title = 'mentoring-first-project';

  isShowCatalog=false;
  isShowImg=false;

  readonly header = 'Главная';
  readonly userButton = 'Пользователи'
  readonly todosButton = 'Todos'
  readonly header2 = 'О компании';
  readonly header3 = 'Каталог';

  readonly header2item1 = UpperCaseMenuItems[0];
  readonly aboutCompany = aboutCompany;
  menuItems = UpperCaseMenuItems;
  readonly newPages = newPages;

  private readonly dialog = inject(MatDialog);
  public readonly userService = inject(UserService)
  isUpperCase=true;

  changeMenuText(){
    this.menuItems = UpperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase =! this.isUpperCase
  }

  public openDialog(): void {
    const dialogRef = this.dialog.open(AuthComponent, {
       width:"400px",
       height:"200px",
    });
    dialogRef.afterClosed().subscribe((result:string) => {
      if (result === 'admin') {
        this.userService.loginAsAdmin();
      } else if (result === 'User') {
        this.userService.loginAsUser();
      } else{ return undefined;
      }
    })
  }

  public logout(): boolean | void {
    const confirmed = confirm('Вы точно хотите выйти?');
    if (confirmed) {
      return this.userService.logOut();
    } else {
      return false;
    }
  }
}


