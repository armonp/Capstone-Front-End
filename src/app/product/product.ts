import { Vendor } from '../vendor/vendor';

export class Product {
    id:number = 0;
    partNbr:string;
    name:string;
    price:number;
    unit:string;
    photoPath:string;
    vendorId:number;
    vendor:Vendor;
}
