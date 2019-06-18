import { Directive, OnInit, HostBinding, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appUserDynamicDirective]'
})
export class UserDynamicDirectiveDirective implements OnInit {

  @Input() defaultColor: string = "transparent";
  @Input() highlightColor: string = "white";
  //this way we are accessing the DOM element that is given as the parameter: stylebackgroundColor
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.backgroundColor = this.highlightColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'blue')

  }

  @HostListener('mouseleave') mousleave(eventData: Event){
this.backgroundColor = this.defaultColor;
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')

  }

  //mouseleave and mouseeneter our constants used by HostListener()

}

