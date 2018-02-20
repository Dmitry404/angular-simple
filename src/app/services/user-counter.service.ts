import { Injectable } from '@angular/core';
import { UsersService } from './users.service';

@Injectable()
export class UserCounterService {
  movedToActive = 0;
  movedToInactive = 0;

  constructor(private usersService: UsersService) {
    this.usersService.userMovePerformed.subscribe((status: string) => {
      if (status === 'toActive') {
        this.movedToActive++;
      } else {
        this.movedToInactive++;
      }
    });
  }
}
