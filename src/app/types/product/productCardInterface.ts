export interface ProductCardType{
    _id: string;
    name: string;
    category: string;
    price: number;
    img: string;
    description:string;
    view:number;
}

export interface cartProductsType{
    _id: string;
    name: string;
    category: string;
    price: number;
    img: string;
    description:string;
    view:number;
    quantity: number;
    size: number;
    color: {
        nameColor: string,
        _idColor: string
    };
}