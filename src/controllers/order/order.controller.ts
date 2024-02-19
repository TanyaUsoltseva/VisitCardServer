import { Body, Controller, Post, Get, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { OrderDto } from 'src/dto/order-dto';
import { OrderService } from 'src/services/order/order.service';
import { Order } from 'src/shemas/order';

@Controller('order')
export class OrderController {

    constructor(private orderService: OrderService) {}

    @Get()
    getAllUsers(): Promise<Order[]> {
        return this.orderService.getAllOrder();
    }

    @Get("userId")
    getUserByUserId(@Param('userId') userId: string): Promise<Order[]> {
        return this.orderService.getOrderByUserId(userId);
    }



    @Post()
    initProduts(@Body() data: OrderDto): Promise<Order> {

        const orderData = new OrderDto(data.name, data.address, data.telephone, data.mail, data.message, data.productId, data.userId, data.orderNumber);
        return this.orderService.sendOrder(orderData);
    }


    @Delete()
    deleteOrder(): Promise<Order> {
        return this.orderService.deleteOrder();
    }
 
 
    @Delete(":id")
    deleteOrderById(@Param('id') id): Promise<Order> {
        return this.orderService.deleteOrderById(id);
    }
 
    // @UseGuards(AuthGuard('local'))
    // @Post(":orderId")
    // authUser(@Body() data: OrderDto, @Param('orderId') orderID): any  {
    //     return this.orderService.orderId(data);
    // }

}
