import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: IProduct[] = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 799,
      quantity: 10,
      categoryID: 1,
      imageUrl: 'wireless-headphones.png',
      material: 'Plastic',
      purchaseDate: new Date('2024-11-15'),
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 1299,
      quantity: 5,
      categoryID: 1,
      imageUrl: 'smart-watch.png',
      material: 'Metal',
      purchaseDate: new Date('2025-01-20'),
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 649,
      quantity: 20,
      categoryID: 2,
      imageUrl: 'running-shoes.png',
      material: 'Fabric',
      purchaseDate: new Date('2025-03-10'),
    },
    {
      id: 4,
      name: 'Backpack',
      price: 450,
      quantity: 15,
      categoryID: 3,
      imageUrl: 'backpack.png',
      material: 'Leather',
      purchaseDate: new Date('2025-06-05'),
    },
  ];
  getProductsByCatID(catID: number): IProduct[] {
    return this.products.filter((p) => p.categoryID === catID);
  }

  getProductByID(prodID: number): IProduct | undefined {
    return this.products.find((p) => p.id === prodID);
  }

  getAllProducts(): IProduct[] {
    return this.products;
  }
}
