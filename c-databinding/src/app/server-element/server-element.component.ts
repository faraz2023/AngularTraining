import { Component, OnInit, Input, 
  ViewEncapsulation, OnChanges, 
  SimpleChanges,
DoCheck,
AfterContentInit,
AfterContentChecked,
AfterViewChecked,
AfterViewInit,
OnDestroy, 
ViewChild,
ElementRef,
ContentChild} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, 
OnChanges, DoCheck,
 AfterContentInit, AfterContentChecked,
 AfterViewChecked, AfterViewInit,
 OnDestroy {
  @Input('srvElement') element: {type: string, name: string, content: string}; //{} for type as JS object
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef;
  //@Input makes the 'element' property accessible
  // by the app.component so we can perform property binding
  //look at the ngFor in app root and [srvElement]
  //the argument in Input() is the alias name
  // for the property from outside this components
  constructor() { 
    console.log('constructor called');
  }

  //this gets called whenever the object is modified. See how "name" is changed with
  //the button in parent component
  ngOnChanges(changes: SimpleChanges){
    //object changes is our element object this gets printed
    console.log(changes);
    console.log('ngOnChanges called');
  }
  //this gets called when ever object is initialized
  ngOnInit() {
    console.log('ngOnInit called');
    console.log("I am telling and you cant see because its t0o soon:"
     + this.header.nativeElement.textContent);
  }

  //this gets called whenever Angular is checking for any event
  //this consumes a lot of power. 
  ngDoCheck(){
    console.log('ngDoCheck called');
  }

  //whenever ng-content is processed
  ngAfterContentInit(){
    console.log('ngAfterContentInit called');
    console.log("Paragraph is" + this.paragraph.nativeElement.textContent);
  }
  
  //After every change detection cycle
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit called');
    console.log("I am telling and you CAN see because it's good time:" 
    + this.header.nativeElement.textContent);
  }

  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
}
