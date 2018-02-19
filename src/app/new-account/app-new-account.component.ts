import { Component } from '@angular/core';
import { Account } from "../models/account.model";
import { LoggingService } from "../services/logging.service";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './app-new-account.component.html',
  providers: [LoggingService]
})
export class AppNewAccountComponent {
  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountsService.addAccount(new Account(name, status));
    this.loggingService.logStatusChange(status);
  }
}
