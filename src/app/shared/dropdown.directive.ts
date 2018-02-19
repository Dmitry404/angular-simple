import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isToggleOpened = false;
  @HostListener('click') toggleOpened() {
    this.isToggleOpened = !this.isToggleOpened;
  }
}
