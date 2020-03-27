import { Pipe, PipeTransform } from '@angular/core';
import { Vendor } from './vendor';

@Pipe({
  name: 'vendorSearch'
})
export class VendorSearchPipe implements PipeTransform {

  transform(vendors: Vendor[], searchCriteria:string=""): Vendor[] {
    if (searchCriteria =="") return vendors;
    searchCriteria = searchCriteria.toLowerCase();
    let selVens: Vendor[] = [];
    for (let vendor of vendors) {
      if (vendor.id.toString().includes(searchCriteria) ||
      vendor.code.toLowerCase().includes(searchCriteria) ||
      (vendor.address !=null && vendor.address.toLowerCase().includes(searchCriteria)) ||
      (vendor.city != null && vendor.city.toLowerCase().includes(searchCriteria)) ||
      (vendor.email != null && vendor.email.toLowerCase().includes(searchCriteria)) ||
      vendor.name.toLowerCase().includes(searchCriteria) ||
      (vendor.zipCode != null && vendor.zipCode.toString().toLowerCase().includes(searchCriteria)) ||
      (vendor.phone != null && vendor.phone.toString().toLowerCase().includes(searchCriteria)) ||
      (vendor.state != null && vendor.state.toString().toLowerCase().includes(searchCriteria))) 
        selVens.push(vendor);
    } 
    return selVens;
  }

}
