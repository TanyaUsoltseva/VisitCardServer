export interface IOrder {
    name: string;
    address: string;
    telephone: number;
    mail: string;
    message: string;
    productId: IProductId[];
    userId: string;
    orderNumber: number;
    _id?: string
}

export interface IProductId {
    count: number;
    _id: string;
    orderNumber: number;
}