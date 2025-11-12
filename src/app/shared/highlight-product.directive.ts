import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../catalog/models/product';

@Directive({
  selector: '[appHighlightProduct]'
})
export class HighlightProductDirective implements OnInit {
  @Input() appHighlightProduct: Product | null = null;
 

  constructor(private el: ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    if (this.appHighlightProduct) {
      //add border if discount > 0
      if(this.appHighlightProduct.discount && this.appHighlightProduct.discount > 0){
        this.renderer.setStyle(this.el.nativeElement, 'border', "2px solid red");
      }
      //set opacity to 0.5 if quantity < 1
      if(this.appHighlightProduct.quantity !== undefined && this.appHighlightProduct.quantity < 1){
        this.renderer.setStyle(this.el.nativeElement, 'opacity', "0.5");
      }
    }
  }
    // Utility method to set background color safely
  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
 // Mouse enters element
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor("green");
  }

  // Mouse leaves element
  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor('');
  }
}
