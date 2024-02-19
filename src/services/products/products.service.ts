import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductDto } from 'src/dto/product-dto';
import { IProductClient } from 'src/interfaces/product';
import { Products, ProductsDocument } from 'src/shemas/products';

@Injectable()
export class ProductsService {
    private productCount = 10;

    constructor(@InjectModel(Products.name) private productsModel: Model<ProductsDocument>) {

    }

    async generateProducts(): Promise<any> {
        for (let i = 0; i <= this.productCount; i++) {
            const product = new ProductDto('test' + i, 'test desc', 'test operator', '300' + i, 'test img');
            const productData = new this.productsModel(product);
            await productData.save();
        }
        return this.productsModel.find()    
    }


    async deleteProduct(): Promise<any> {
        return this.productsModel.deleteMany({})
    }

    getAllProduct() {
        return  this.productsModel.find() ;
    }

    findProductById(id) {
        return  this.productsModel.findById(id) ;
    }

    async uploadProduct(body: IProductClient) {
        const product = new ProductDto(body.title, body.description, body.category, body.price, body.image);
        const productData = new this.productsModel(product);
        await productData.save()
    }

} 
  