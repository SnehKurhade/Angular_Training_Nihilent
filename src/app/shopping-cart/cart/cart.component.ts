import { Component } from '@angular/core';
import { Item as CartItem } from '../models/Item';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
 cartItems: CartItem[] = [];
  totalPrice = 0;
  
 ngOnInit() {
    this.loadCart();
 }
  constructor(private cart:CartService) {}

  loadCart() {
    this.cartItems = this.cart.getCartItems();
  }

  removeItem(id: number) { }

  clearCart() { }
}