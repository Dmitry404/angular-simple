import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') signupForm: NgForm;
  answer: string;
  genders = ['male', 'femail'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    /*this.signupForm.setValue({
      userData: {
        username: suggestedName,
        email: 'superuser@example.com',
      },
      secret: 'teacher',
      answer: 'Mr. Bork',
      gender: 'male',
    });*/
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  onSubmit(form: ElementRef) {
    console.log(form);
    console.log(this.signupForm);
  }
}
