import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DetailsComponent } from './products/details/details.component';
import { ListComponent } from './products/list/list.component';
import { CounterComponent } from './products/counter/counter.component';
import { InsertComponent } from './products/insert/insert.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ListComponent, DetailsComponent, CounterComponent,
     InsertComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  exports: [ListComponent, InsertComponent]
})
export class CatalogModule { }
