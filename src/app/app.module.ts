import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppNewAccountComponent } from './new-account/app-new-account.component';
import { AppAccountComponent } from './account/app-account.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNewAccountComponent,
    AppAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
