import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BasicHighlightDirective} from './basic-highlight/basic-highlight.directives';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { DoubleBetterDirectiveDirective } from './doubleBetterDirective/double-better-directive.directive';
import { HostBindingDirectiveDirective } from './hostBindingDirective/host-binding-directive.directive';
import { UserDynamicDirectiveDirective } from './UserDynamicDirective/user-dynamic-directive.directive';
import {UnlessDirective} from './unlessDirective/unless.directive'


//after addinbg the directive, we can use itin our HTML code. look at .html file
@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    DoubleBetterDirectiveDirective,
    HostBindingDirectiveDirective,
    UserDynamicDirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
