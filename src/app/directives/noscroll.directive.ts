import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: 'input[type="number"]'
})
export class NoscrollDirective {

  @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    event.preventDefault();
  }
  constructor() { }

}
