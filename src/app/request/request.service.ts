import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from './request';

const url:string = "http://localhost:5000/api/requests"
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  list():Observable<Request[]> {
    return this.http.get(`${url}`) as Observable<Request[]>;
  }
  get(id:any):Observable<Request> {
    return this.http.get(`${url}/${id}`) as Observable<Request>;
  }
  create(request: Request):Observable<Request> {
    return this.http.post(`${url}`, request) as Observable<Request>;
  }
  update(request: Request):Observable<any> {
    return this.http.put(`${url}/${request.id}`, request) as Observable<any>;
  }
  remove(request:Request):Observable<any> {
    return this.http.delete(`${url}/${request.id}`) as Observable<any>;
  }
  //mark reviewed
  review(request:Request):Observable<any> {
    return this.http.post(`${url}/review/${request.id}`, request) as Observable<any>;
  }
  //mark rejected
  reject(request:Request):Observable<any> {
    return this.http.post(`${url}/reject/${request.id}`, request) as Observable<any>;
  }
  //approve
  approve(request:Request):Observable<any> {
    return this.http.post(`${url}/approve/${request.id}`, request) as Observable<any>;
  }
  //list for review
/*   reviews(request:Request):Observable<any> {
    return this.http.get(`${url}/reviews/${user.id}`) as Observable<any>;
  } */
  constructor(
    private http: HttpClient
  ) { }
}
