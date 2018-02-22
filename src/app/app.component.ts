import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  forbiddenProjectNames = ['Test'];

  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'name': new FormControl(null, Validators.required, this.containsForbiddenName.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormArray([
        new FormControl('Stable'),
        new FormControl('Critical'),
        new FormControl('Finished'),
      ]),
    });
  }

  onSubmit() {
    console.log(this.projectForm);
  }

  containsForbiddenName(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.forbiddenProjectNames.indexOf(control.value) !== -1) {
          resolve({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2500);
    });
    return promise;
  }
}
