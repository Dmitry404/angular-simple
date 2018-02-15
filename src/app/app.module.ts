import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { DisplayEvenComponent } from './display-even/display-even.component';
import { DisplayOddComponent } from './display-odd/display-odd.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    DisplayEvenComponent,
    DisplayOddComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
