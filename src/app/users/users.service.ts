import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './users.class';
import { SystemService } from '../system.service';

const url:string = "http://localhost:5000/api/users";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  list():Observable<User[]> {
    return this.http.get(`${url}`) as Observable<User[]>;
  }
  get(id:any):Observable<User> {
    return this.http.get(`${url}/${id}`) as Observable<User>;
  }
  create(user: User):Observable<User> {
    return this.http.post(`${url}`, user) as Observable<User>;
  }
  update(user: User):Observable<any> {
    return this.http.put(`${url}/${user.id}`, user) as Observable<any>;
  }
  remove(user:User):Observable<any> {
    return this.http.delete(`${url}/${user.id}`) as Observable<any>;
  }
  login(uname:string, pword:string):Observable<any>{
    return this.http.get(`${url}/login/${uname}/${pword}`) as Observable<any>;
  }


  constructor(
    private http: HttpClient ,
    private system: SystemService
  ) { }
}
