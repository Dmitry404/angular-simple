import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') subscriptionForm: NgForm;
  subscriptionData = {
    email: '',
    password: '',
    subscription: '',
  };
  subscriptionSubmitted = false;

  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscription = 'Advanced';

  onFormSubmit() {
    this.subscriptionData.email = this.subscriptionForm.value.email;
    this.subscriptionData.password = this.subscriptionForm.value.password;
    this.subscriptionData.subscription = this.subscriptionForm.value.subscription;

    this.subscriptionSubmitted = true;
    this.subscriptionForm.reset();
  }
}
