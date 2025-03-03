import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

const newPages = [5,4,3,2,1];

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})

export class HomepageComponent {
  isShowCatalog=false;
  isShowImg=false;

  readonly newPages = newPages;

}
