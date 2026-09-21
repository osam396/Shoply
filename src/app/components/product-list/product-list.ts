import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { IProduct } from '../../Models/iproduct';
import { ProductCard } from '../../directives/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, DatePipe, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  @Input() products: IProduct[] = [];
  @Output() addToCartEvent = new EventEmitter<IProduct>();

  constructor(private router: Router) {}

  addToCart(product: IProduct) {
    if (product.quantity > 0) {
      product.quantity -= 1;
      this.addToCartEvent.emit(product);
    }
  }

  getTotalPrice(product: IProduct): number {
    return product.price * product.quantity;
  }

  goToDetails(productId: number) {
    this.router.navigate(['/products', productId]);
  }
}
