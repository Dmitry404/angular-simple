import { Component } from '@angular/core';
import { Account } from "../models/account.model";
import { AccountsService } from "../services/accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './app-new-account.component.html'
})
export class AppNewAccountComponent {
  constructor(private accountsService: AccountsService) {
  }

  onCreateAccount(name: string, status: string) {
    this.accountsService.addAccount(new Account(name, status));
  }
}
