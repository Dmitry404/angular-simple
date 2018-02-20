import { Component } from '@angular/core';
import { UserCounterService } from './services/user-counter.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService, UserCounterService],
})
export class AppComponent {
  constructor(public userCounterService: UserCounterService) {
  }
}
