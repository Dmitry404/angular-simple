import { Component, EventEmitter, Output } from '@angular/core';
import { Account } from "../models/account.model";
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './app-new-account.component.html',
  providers: [LoggingService]
})
export class AppNewAccountComponent {
  @Output('accountAdded') accountCreatedEvent = new EventEmitter<Account>();

  constructor(private loggingService: LoggingService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountCreatedEvent.emit(new Account(name, status));
    this.loggingService.logStatusChange(status);
  }
}
