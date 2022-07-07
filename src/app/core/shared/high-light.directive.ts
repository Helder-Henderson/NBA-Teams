import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[highLight]',
})
export class HighLightDirective {
  constructor(private render: Renderer2, private elementeRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.render.addClass(this.elementeRef.nativeElement,'mouseOver')
  }

  @HostListener('mouseout') onMouseOut() {
    this.render.removeClass(this.elementeRef.nativeElement,'mouseOver')
  }

}
