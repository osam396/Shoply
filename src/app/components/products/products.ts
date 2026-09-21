import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';
import { IProduct } from '../../Models/iproduct';
import { ProductsService } from '../../services/products-service';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-products',
  imports: [ProductList],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  maxPrice: number | null = null;
  products: IProduct[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
  ) {
    this.products = this.productsService.getAllProducts();
  }

  get filteredProducts(): IProduct[] {
    if (this.maxPrice === null) {
      return this.products;
    }
    return this.products.filter((p) => p.price <= this.maxPrice!);
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.maxPrice = value === '' ? null : Number(value);
  }

  onAddToCart(product: IProduct) {
    this.cartService.addToCart(product);
  }
}
