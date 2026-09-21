import { Component } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
// import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../services/cart-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  imports: [CurrencyPipe],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css',
})
export class ShoppingCart {
  constructor(
    public cartService: CartService,
    private router: Router,
  ) {}

  goToDetails(prodID: number) {
    this.router.navigate(['/products', prodID]).then(() => {
      console.log('Navigation completed');
    });
  }
}
