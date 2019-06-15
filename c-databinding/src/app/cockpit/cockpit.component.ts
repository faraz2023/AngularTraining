import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //serverCreated and blueprintCreated are
  // events that emitt when we press a button
  // from the html code for this components
  //@Output outputs the event for external listening
  @Output() serverCreated= new EventEmitter<{serverName: string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{blueprintName: string, blueprintContent:string}>();
  //newServerContent = '';

  //the argument give to the ViewChild is the deselctor of the element in the HTML file of
  //of type ElementRef
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  //Remeber that nameInput is the whole html element, not its value.
  // you need to access the value. See code below
  onAddServer(nameInput: HTMLInputElement){
    this.serverCreated.emit({serverName: nameInput.value,
       serverContent: this.serverContentInput.nativeElement.value});
  }
  
  onAddBlueprint(nameInput){
    this.blueprintCreated.emit({blueprintName: nameInput.value,
      blueprintContent: this.serverContentInput.nativeElement.value});
  }
}
