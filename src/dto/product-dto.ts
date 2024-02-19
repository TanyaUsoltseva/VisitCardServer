import { IProduct } from "src/interfaces/product";

export class ProductDto implements IProduct {
    id: string;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    favorite?: boolean;
    count: number;
 
    constructor(title,description,category,price, image) {
        this.title = title;
        this.price = price ? Number(price) : null;
        this.description = description || '';
        this.category = category || '';
        this.image = image
    }
}