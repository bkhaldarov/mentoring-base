import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

const newPages=[5,4,3,2,1];

const aboutCompanyFn=(text:string)=>text;
const aboutCompany=aboutCompanyFn('О компании');

const menuItems =['Каталог','Стройматериалы','Инструменты','Электрика','Интерьер и одежда']

const UpperCaseMenuItems=menuItems.map(
  (items:string)=>{
    return items.toUpperCase();
  }
)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'mentoring-first-project';

  isShowCatalog=false;
  isShowImg=false;

  readonly header='Главная';
  readonly header2='О компании';
  readonly header3='Каталог';

  readonly header2item1=UpperCaseMenuItems[0];
  readonly aboutCompany=aboutCompany;
  menuItems=UpperCaseMenuItems;
  readonly newPages=newPages;

  isUpperCase=true;

  changeMenuText(){
    this.menuItems = UpperCaseMenuItems.map(
      item=>this.isUpperCase ? item.toLowerCase() : item.toUpperCase()
    )
    this.isUpperCase=!this.isUpperCase
  }

}
