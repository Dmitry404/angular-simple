import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";

@Component({
  selector: 'app-account',
  templateUrl: './app-account.component.html'
})
export class AppAccountComponent {
  @Input() account: Account;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<UpdateInfo>();

  onSetTo(status: string) {
    this.statusChanged.emit(new UpdateInfo(this.id, status));
    console.log('Server status has been changed to ' + status);
  }
}
