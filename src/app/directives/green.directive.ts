import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[green]',
  standalone: true
})
  export class GreenDirective {
    color = '#4B565E';
    @HostBinding('style.backgroundColor')
    get backgroundColor(){
      return this.color;
    }

    @HostListener('mouseenter')
    enter() {
      this.color = 'green'
    }
    
    @HostListener('mouseleave')
    leave() {
      this.color = '#4B565E'
    }
  }

