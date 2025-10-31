import { Injectable } from '@angular/core';
import { Item as CartItem, Item } from './models/Item';
@Injectable({
  providedIn: 'root'
})
export class CartService {

private storageKey = 'shoppingCart';
cartItems:CartItem[] = [];
  constructor() {
    // Initialize sessionStorage with demo data if empty
    //if (!sessionStorage.getItem(this.storageKey)) {
  
     
  }

  //Add Product to Cart
  addToCart(item: CartItem): void {
     
  }

  //Get All Cart Items
  getCartItems(): CartItem[] {

    var totem = new CartItem(1,"rose",55,3,"rose.jpg");
    this.cartItems.push(totem);
    var totem = new CartItem(1,"lily",55,3,"lily.jpg");
    this.cartItems.push(totem);
    return this.cartItems;
  }

  //Update Quantity
  updateQuantity(productId: number, quantity: number): void {
     
  }

  //Remove Product from Cart
  removeFromCart(productId: number): void {
   
  }

  //Clear Entire Cart
  clearCart(): void {
  
  }

  //Calculate Total Items
  getTotalItems(): number {
  return 45;
  }

  //Calculate Total Amount
  getTotalPrice(): number {
    return 12;
  }

  // Private helper
  private saveCart(cart: CartItem[]): void {
    //save data to sessionStorage
  }
}
