import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProductCard]'
})
export class ProductCard implements OnChanges {
  @Input() appProductCard: any;

  private defaultShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
  private hoverShadow = '0 12px 24px rgba(0, 0, 0, 0.25)';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyBaseStyles();
  }

  private applyBaseStyles() {
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '12px');
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.defaultShadow);
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'box-shadow 0.3s ease');
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.hoverShadow);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', this.defaultShadow);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appProductCard']) {
      console.log('Product card data changed:', changes['appProductCard'].currentValue);
    }
  }
}