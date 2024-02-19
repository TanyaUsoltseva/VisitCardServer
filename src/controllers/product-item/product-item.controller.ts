import { Body, Controller, Post, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ProductsService } from 'src/services/products/products.service';
import { diskStorage } from 'multer';import { IProductClient } from 'src/interfaces/product';


@Controller('product-item')
export class ProductItemController {
    constructor(private productsService: ProductsService) {

    }

    static imgName: string;

    @Post()
    @UseInterceptors(FileInterceptor('image', {

        storage: diskStorage( {
            destination: './public/',
            filename: (req, file, cb) => {
                const imgType = file.mimetype.split('/')
                const uniqueSuffix = Date.now() + '-' + Math.round( Math.random() * 1E9);
                const imgName = file.fieldname + '-' + uniqueSuffix+'.'+imgType[1]

                cb(null, imgName);
                ProductItemController.imgName = imgName;
            }
        })
    }))


    initProduct(@Body() body: IProductClient): void {
        body.image = ProductItemController.imgName;
        
        this.productsService.uploadProduct(body);
    }
}
