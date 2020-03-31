import { Product } from '../product/product';
import { Request } from '../request/request';

export class Reqline {
    id:number;
    requestId:number;
    productId:number;
    qty:number;

    request: Request;
    product: Product;
}
