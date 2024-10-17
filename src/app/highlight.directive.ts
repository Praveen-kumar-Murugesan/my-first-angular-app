import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  @Input() appHighlight = '';

  constructor(private el: ElementRef) {}

  @HostListener('mouseEnter') onMouseEnter() {
    this.highlight(this.appHighlight || 'blue');
  }

  @HostListener('mouseLeave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
