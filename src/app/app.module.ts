import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {BasiccheckComponent} from './basiccheck/basiccheck.component';
import {AdvancecheckComponent} from './advancecheck/advancecheck.component';
import {FinalcheckComponent} from './finalcheck/finalcheck.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent,BasiccheckComponent,AdvancecheckComponent,FinalcheckComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
