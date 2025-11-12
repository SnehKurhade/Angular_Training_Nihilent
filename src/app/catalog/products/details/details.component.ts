import { Component,Input, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {
 
   @Input () product: Product|undefined;

    ngOnInit() {}
    
 
   onUpdate(data:any){
     if(this.product != undefined)
         this.product.likes=data.count;
   }

}
