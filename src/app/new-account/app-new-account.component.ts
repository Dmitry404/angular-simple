import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from "../models/account.model";

@Component({
  selector: 'app-new-account',
  templateUrl: './app-new-account.component.html'
})
export class AppNewAccountComponent {
  @Output('accountAdded') accountCreatedEvent = new EventEmitter<Account>();

  onCreateAccount(name: string, status: string) {
    this.accountCreatedEvent.emit(new Account(name, status));
    console.log('Account has been created ' + name + ' : ' + status);
  }
}
