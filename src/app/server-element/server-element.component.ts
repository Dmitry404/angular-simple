import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None, // Native (clears out the styles? shadow DOM), Emulated (default)
})
export class ServerElementComponent {
  // @Input('srvElement') - it's an alias. In such a case you should use it in a component (html) instead of 'element'
  @Input() element: {
    type: string,
    name: string,
    content: string,
  };
}
