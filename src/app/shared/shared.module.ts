import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightProductDirective } from './highlight-product.directive';

@NgModule({
  declarations: [HighlightProductDirective],
  imports: [CommonModule],
  exports: [HighlightProductDirective]
})
export class SharedModule { }
