import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem: ElementRef) { 
    elem.nativeElement.style.backgroundColor = "yellow"
    elem.nativeElement.style.order = "1"
  }

}
    
