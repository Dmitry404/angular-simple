import { EventEmitter } from '@angular/core';

export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  userMovePerformed = new EventEmitter<string>();

  moveToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);

    this.userMovePerformed.emit('toActive');
  }

  moveToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);

    this.userMovePerformed.emit('toInactive');
  }
}
