import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
})
export class UsernameComponent  {
  userName: string '';

  isUserNameEmpty() {
    return this.userName === '';
  }

  onClickReset() {
    this.userName = '';
  }
}
