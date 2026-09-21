export interface IProduct {
    id: number;
    name: string;
    price: number;
    quantity: number;
    categoryID: number;
    imageUrl: string;
    material: string;
    purchaseDate: Date;
}