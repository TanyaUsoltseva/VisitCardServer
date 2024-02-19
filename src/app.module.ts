import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './controllers/users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './controllers/users/products/products.module';
import { OrderModule } from './controllers/order/order.module';



@Module({
  imports: [
    OrderModule,
    UsersModule,
    ProductsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/exam')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
