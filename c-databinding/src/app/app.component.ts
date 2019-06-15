import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  i: number = 0;
  serverElements = [{type: 'server',
   name: 'Testserver', 
   content:'This is a test'}
  ];

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {blueprintName: string, blueprintContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.blueprintName,
      content: blueprintData.blueprintContent
    });
  }

  onChangeFirst(){
   this.serverElements[0].name += this.i.toString();
   this.i++;
  }

  onDestoryFirst(){
    //.splice starts at 0, delets 1 element
    this.serverElements.splice(0,1);
  }
}
