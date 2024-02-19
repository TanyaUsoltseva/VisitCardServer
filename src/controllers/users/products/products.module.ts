import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/static/private/constants';
import { JwtStrategyService } from 'src/services/authentication/jwt-strategy/jwt-strategy.service';
import { ProductsController } from './products.controller';
import { Products, ProductsSchema } from 'src/shemas/products';
import { ProductsService } from 'src/services/products/products.service';
import { ProductItemController } from 'src/controllers/product-item/product-item.controller';

@Module({
  controllers: [ProductsController, ProductItemController],
  imports: [MongooseModule.forFeature([{ name: Products.name, schema: ProductsSchema }]),
      PassportModule,
      JwtModule.register({
        secret: jwtConstants. secret,
        signOptions: { expiresIn: '60s'},
      }),],
      providers: [ProductsService, JwtStrategyService],
}) 
export class ProductsModule {}
