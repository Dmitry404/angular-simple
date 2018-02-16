import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'yellowgreen';
  @Input() hightlightColor: string = 'yellow';
  @Input() afterHightlightColor: string = 'lightyellow';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellowgreen');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    // this.backgroundColor = 'yellow';
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightyellow');
    // this.backgroundColor = 'lightyellow';
    this.backgroundColor = this.afterHightlightColor;
  }
}
