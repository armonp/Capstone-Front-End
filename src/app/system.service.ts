import { Injectable } from '@angular/core';
import { User } from './users/users.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedIn:User;

  constructor() { }
}
