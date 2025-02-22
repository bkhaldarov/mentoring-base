import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

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
  selector: 'app-homepage',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor, RouterLink],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  title = 'mentoring-first-project';

  isShowCatalog=false;
  isShowImg=false;

  readonly header = 'Главная';
  readonly userButton='Пользователи'
  readonly header2 = 'О компании';
  readonly header3 = 'Каталог';

  readonly header2item1 = UpperCaseMenuItems[0];
  readonly aboutCompany = aboutCompany;
  menuItems = UpperCaseMenuItems;
  readonly newPages = newPages;

  isUpperCase=true;

  changeMenuText(){
    this.menuItems = UpperCaseMenuItems.map(
      item => this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase =! this.isUpperCase
  }

}
