import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IOrder, IProductId } from 'src/interfaces/order';

 
export type OrderDocument = HydratedDocument<Order>;
 
@Schema()
export class Order implements IOrder {
    @Prop() name: string;

    @Prop() address: string;

    @Prop() telephone: number;

    @Prop() mail: string;

    @Prop() message: string;

    @Prop() productId: IProductId[];

    @Prop() userId: string     

    @Prop() orderNumber: number;
 }   export const OrderSchema = SchemaFactory.createForClass(Order);