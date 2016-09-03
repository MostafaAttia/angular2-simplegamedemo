///<reference path="../node_modules/angular2/typings/browser.d.ts"/>

//import {bootstrap} from 'angular2/platform/browser';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PuzzleComponent } from './puzzle/puzzle.component';

import { AppComponent } from "./app.component";


@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, PuzzleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

//bootstrap(AppComponent);