import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IProduct } from 'src/interfaces/product';
import { ProductsService } from 'src/services/products/products.service';


@Controller('products')
export class ProductsController {

    constructor(private productsService: ProductsService) {

    }

    @Get()
    getAllProducts(): Promise<IProduct[]>  {
        return this.productsService.getAllProduct();
    }

    @Get(":_id")
    getProductById(@Param('_id') _id): Promise<IProduct> {
        return this.productsService.findProductById(_id)
    }

    @Post()
    initProducts(): Promise<any> {
        this.productsService.generateProducts()
       return this.productsService.generateProducts();
    }


    @Delete()
    removeAllProduct(): void {
       this.productsService.deleteProduct();
    }
    
}
