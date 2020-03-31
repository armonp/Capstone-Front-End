import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reqline } from './reqline';

const url:string = "http://localhost:5000/api/requestlines"

@Injectable({
  providedIn: 'root'
})
export class ReqlineService {
  list():Observable<Reqline[]> {
    return this.http.get(`${url}`) as Observable<Reqline[]>;
  }
  get(id:any):Observable<Reqline> {
    return this.http.get(`${url}/${id}`) as Observable<Reqline>;
  }
  create(reqline: Reqline):Observable<Reqline> {
    return this.http.post(`${url}`, reqline) as Observable<Reqline>;
  }
  update(reqline: Reqline):Observable<any> {
    return this.http.put(`${url}/${reqline.id}`, reqline) as Observable<any>;
  }
  remove(reqline:Reqline):Observable<any> {
    return this.http.delete(`${url}/${reqline.id}`) as Observable<any>;
  }


  constructor(
    private http: HttpClient
  ) { }
}
