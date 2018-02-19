import { Component } from '@angular/core';
import { Account } from "./models/account.model";
import { UpdateInfo } from "./models/updateInfo.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accounts: Account[] = [
    new Account('Master account', 'active'),
    new Account('Test account', 'inactive'),
    new Account('Hidden account', 'unknown'),
  ];

  onAccountAdded(account: Account) {
    console.log('account event received ' + account)
    this.accounts.push(account);
  }

  onStatusChanged(updateInfo: UpdateInfo) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
}
