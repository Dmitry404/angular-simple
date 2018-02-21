import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";
import "rxjs/add/observable/interval";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private numbersSubscription: Subscription;
  private myObservableSubscription: Subscription;

  ngOnInit() {
    const numbers = Observable.interval(1000);
    this.numbersSubscription = numbers.subscribe((number: number) => {
      console.log(number);
    });

    const observable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => observer.next('foo'), 2000);
      setTimeout(() => observer.next('bar'), 4000);
      setTimeout(() => /*observer.error('foobar')*/ observer.complete(), 5000);
      setTimeout(() => observer.next('baz'), 6000);

    });

    this.myObservableSubscription = observable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (errorMessage: string) => {
        console.error(errorMessage)
      },
      () => console.info('completed')
    );
  }

  ngOnDestroy(): void {
    this.numbersSubscription.unsubscribe();
    this.myObservableSubscription.unsubscribe(); // if you go from 'home' the component will be destroyed but this subscription continues to work
  }
}
