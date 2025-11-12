import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) {}


  ngOnInit() {
    this.loadProducts();
  }
  
  loadProducts() {
     this.products=this.productService.getAll();
  };

}
