import { Component, OnInit } from '@angular/core';
import { Account } from "./models/account.model";
import { UpdateInfo } from "./models/updateInfo.model";
import { AccountsService } from "./services/accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountsService]
})
export class AppComponent implements OnInit {
  accounts: Account[] = [];

  constructor(private accountsService: AccountsService) {
  }

  ngOnInit(): void {
    this.accounts = this.accountsService.accounts;
  }
}
