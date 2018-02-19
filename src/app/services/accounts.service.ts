import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";

export class AccountsService {
  accounts: Account[] = [
    new Account('Master account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden account', 'unknown'),
  ];

  addAccount(account: Account) {
    this.accounts.push(account);
  }

  updateStatus(updateInfo: UpdateInfo) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
