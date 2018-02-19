import { Component, Input } from '@angular/core';
import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";
import { LoggingService } from "../services/logging.service";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './app-account.component.html',
  providers: [LoggingService]
})
export class AppAccountComponent {
  @Input() account: Account;
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(new UpdateInfo(this.id, status));
    this.loggingService.logStatusChange(status);
  }
}
