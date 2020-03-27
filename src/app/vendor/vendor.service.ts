import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vendor } from './vendor';
import { HttpClient } from '@angular/common/http';

const url:string ="http://localhost:5000/api/vendors"
@Injectable({
  providedIn: 'root'
})
export class VendorService {
  list():Observable<Vendor[]> {
    return this.http.get(`${url}`) as Observable<Vendor[]>;
  }
  get(id:any):Observable<Vendor> {
    return this.http.get(`${url}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor):Observable<Vendor> {
    return this.http.post(`${url}`, vendor) as Observable<Vendor>;
  }
  update(vendor: Vendor):Observable<any> {
    return this.http.put(`${url}/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(vendor:Vendor):Observable<any> {
    return this.http.delete(`${url}/${vendor.id}`) as Observable<any>;
  }


  constructor(
    private http: HttpClient 
  ) { }

}
