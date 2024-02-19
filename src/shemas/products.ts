import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { IProduct } from 'src/interfaces/product';

export type ProductsDocument = HydratedDocument<Products>;
 
@Schema()
export class Products implements IProduct {
    @Prop() id: string;
 
    @Prop() title: string;
 
    @Prop() price: number;
 
    @Prop() description: string;
 
    @Prop() category: string;
 
    @Prop() image: string;
 
    @Prop() favorite?: boolean;

    @Prop() count: number;
}
 
export const ProductsSchema = SchemaFactory.createForClass(Products);