import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, // Native (clears out the styles? shadow DOM), Emulated (default)
})
export class ServerElementComponent implements OnInit, OnChanges {
  // @Input('srvElement') - it's an alias. In such a case you should use it in a component (html) instead of 'element'
  @Input() element: {
    type: string,
    name: string,
    content: string,
  };

  constructor() {
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('Called once a component initialized');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Called after a bound property changes');
    console.log(changes);
  }
}
