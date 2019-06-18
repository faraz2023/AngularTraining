import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  //note that we are using renderer here
  //WHY IS renderer2 a better approach??
  //  when you try to access the element directly, you might get an error in some cases
  //  you do not always have access tro DOM because you cannot assume your app is always run on a browser
  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }
}
