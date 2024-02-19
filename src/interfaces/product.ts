export interface IProduct {
    id: string, 
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    favorite?: boolean,
    count: number
}


export interface IProductClient {
    title: string,
    description:string,
    category:string,
    price:string,
    image:string
}