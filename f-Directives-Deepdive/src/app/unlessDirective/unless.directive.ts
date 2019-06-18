//this is our take on structural directives
import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

//note how the Inpute shares the same name a the selector
//this is a method as a property of the directive that gets executed when ever the parameter changes
//the parameter changes when a value is assign in the html code (check the html)
@Input() set appUnless(condition: boolean) {
    if(!condition){
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
        this.vcRef.clear();
    }
} 
//our sirective sits on an ng-template component [we use a * in front of its name when we use it]
//templateRef<any> is for that
//ViewContainerRed marks the place in which we want to display something. 
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
