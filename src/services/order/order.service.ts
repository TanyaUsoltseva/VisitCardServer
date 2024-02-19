import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/shemas/order';

@Injectable()
export class OrderService {

    constructor(@InjectModel(Order.name) private orderModel: Model<OrderDocument>) {}

    async sendOrder(data): Promise<Order> {
      
        const orderData = new this.orderModel(data);
        const userId = data.userId;
        if (userId) {
          orderData.orderNumber = Object.keys(await this.getOrderByUserId(userId)).length + 1;}
        // } else {
        //   orderData.orderNumber = 0;
        // }
        await orderData.save();
        return Promise.resolve(orderData)
    }

    async getAllOrder(): Promise<Order[]> {
        return this.orderModel.find();
      }
  
      async getOrderByUserId (userId: string): Promise<Order[]> {
        return this.orderModel.find({"userId" : userId});
      }

      async deleteOrder(): Promise<any> {
        return this.orderModel.deleteMany();
      }
   
  
      async deleteOrderById(id: string): Promise<any> {
        return this.orderModel.findByIdAndDelete(id);
      }


      // async orderId(order: OrderDto) {
      //   const orderFromDb = await this.orderModel.find({order: order.userId});
      //   console.log('orderFromDb', orderFromDb)
      //   return {
      //     id: orderFromDb[0]._id,
      //   };
      // }
}
