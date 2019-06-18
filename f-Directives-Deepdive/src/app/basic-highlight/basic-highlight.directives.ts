import { Directive, ElementRef, OnInit } from "@angular/core";

//IMPORTANT: this Directive should be added in app.module.ts
//    Look into @NgModule->declarations-> BasicHighlightDirective (exported class name)
//configuring a directive
//1-a unique selector
@Directive({
    selector: '[appBasicHighlight]' //with [] this will be recognized with 'appBasicHighlight' in any element
})
export class BasicHighlightDirective implements OnInit{
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor = 'blue';
    }
}