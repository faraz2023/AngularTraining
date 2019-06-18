import { ElementRef, Renderer2, Directive, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appDoubleBetterDirective]'
})
export class DoubleBetterDirectiveDirective implements OnInit {



  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'yellow')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'green')

  }

  @HostListener('mouseleave') mousleave(eventData: Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'black')
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white')

  }

  //mouseleave and mouseeneter our constants used by HostListener()
}
