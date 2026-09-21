import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { AboutUs } from './components/about-us/about-us';
import { ContactUs } from './components/contact-us/contact-us';
import { Products } from './components/products/products';
import { ShoppingCart } from './components/shopping-cart/shopping-cart';
import { ProductDetails } from './components/product-details/product-details';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'about-us', component: AboutUs },
  { path: 'contact-us', component: ContactUs },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: 'cart', component: ShoppingCart },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];