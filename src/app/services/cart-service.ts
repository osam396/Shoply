import { Injectable, signal } from '@angular/core';
import { IProduct } from '../Models/iproduct';

export interface ICartItem {
  product: IProduct;
  qty: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ICartItem[] = [];
  private readonly cartVersion = signal(0);

  addToCart(product: IProduct) {
    const existingItem = this.cart.find((item) => item.product.id === product.id);
    if (existingItem) {
      existingItem.qty += 1;
    } else {
      this.cart.push({ product, qty: 1 });
    }

    this.cartVersion.update((version) => version + 1);
  }

  get cartCount(): number {
    this.cartVersion();
    return this.cart.reduce((sum, item) => sum + item.qty, 0);
  }

  get cartTotal(): number {
    return this.cart.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  }
}
