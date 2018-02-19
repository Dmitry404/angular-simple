import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";
import { LoggingService } from "./logging.service";
import { Injectable } from "@angular/core";

@Injectable()
export class AccountsService {
  accounts: Account[] = [
    new Account('Master account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden account', 'unknown'),
  ];

  constructor(private loggingService: LoggingService) {
  }

  addAccount(account: Account) {
    this.accounts.push(account);
    this.loggingService.logAccountAdded(account.name, account.status);
  }

  updateStatus(updateInfo: UpdateInfo) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
    this.loggingService.logStatusChange(updateInfo.newStatus)
  }
}
