import { Component, Input } from '@angular/core';
import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './app-account.component.html'
})
export class AppAccountComponent {
  @Input() account: Account;
  @Input() id: number;

  constructor(private accountsService: AccountsService) {
  }

  onSetTo(status: string) {
    this.accountsService.updateStatus(new UpdateInfo(this.id, status));
  }
}
