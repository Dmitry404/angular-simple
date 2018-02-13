import { Component } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
})
export class UsernameComponent  {
  userName: string '';

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  isUserNameEmpty() {
    return this.userName === '';
  }

  onClickReset() {
    this.userName = '';
  }
}
