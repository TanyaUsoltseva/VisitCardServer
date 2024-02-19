import { IOrder, IProductId } from "src/interfaces/order";

export class OrderDto implements IOrder {
    name: string;
    address: string;
    telephone: number;
    mail: string;
    message: string;
    productId: IProductId[];
    userId: string;
    orderNumber: number;
    _id?: string;

    constructor(name, address, telephone, mail,massage,productId, userId, orderNumber) {
        this.name = name;
        this.telephone = telephone;
        this.address = address;
        this.mail = mail;
        this.message = massage
        this.productId = productId;
        this.userId = userId;
        this.orderNumber = orderNumber
    }
}

