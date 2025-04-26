import { Directive, ElementRef, HostBinding, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[red]',
  standalone: true
})
  export class RedDirective {
    color = '#F0BA4E';
    @HostBinding('style.backgroundColor')
    get backgroundColor(){
      return this.color;
    }

    @HostListener('mouseenter')
    enter() {
      this.color = 'red'
    }
    @HostListener('mouseleave')
    leave() {
      this.color = '#F0BA4E'
    }
  }

