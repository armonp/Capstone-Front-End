import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productSearch'
})
export class ProductSearchPipe implements PipeTransform {

  transform(products: Product[], searchCriteria: string=""): Product[] {
    if (searchCriteria =="") return products;
    searchCriteria = searchCriteria.toLowerCase();
    let selProds: Product[] = [];
    for (let p of products) {
      if (p.id.toString().toLowerCase().includes(searchCriteria) ||
        p.name.toLowerCase().includes(searchCriteria) || 
        p.partNbr.toLowerCase().includes(searchCriteria) ||
        p.price.toString().toLowerCase().includes(searchCriteria) ||
        p.vendor.name.toLowerCase().includes(searchCriteria)) {
          selProds.push(p);
      }
    }
    return selProds;
  }

}
