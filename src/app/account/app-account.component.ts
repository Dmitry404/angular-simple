import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Account } from "../models/account.model";
import { UpdateInfo } from "../models/updateInfo.model";
import { LoggingService } from "../logging.service";

@Component({
  selector: 'app-account',
  templateUrl: './app-account.component.html',
  providers: [LoggingService]
})
export class AppAccountComponent {
  @Input() account: Account;
  @Input() id: number;

  @Output() statusChanged = new EventEmitter<UpdateInfo>();

  constructor(private loggingService: LoggingService) {
  }

  onSetTo(status: string) {
    this.statusChanged.emit(new UpdateInfo(this.id, status));
    this.loggingService.logStatusChange(status);
  }
}
