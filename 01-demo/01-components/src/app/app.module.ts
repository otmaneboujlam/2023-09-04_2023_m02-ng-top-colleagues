import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {C1Component} from "./components/c1.component";
import {IdentiteComponent} from "./components/identite.component";
import { C2Component } from './components/c2/c2.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    IdentiteComponent,
    C2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
