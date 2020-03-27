import { Pipe, PipeTransform } from '@angular/core';
import { User } from './users.class';

@Pipe({
  name: 'usersSearch'
})
export class UsersSearchPipe implements PipeTransform {

  transform(users: User[], searchCriteria:string =""): User[] {
    if (searchCriteria =="") return users;
    searchCriteria = searchCriteria.toLowerCase();
    let selUsers: User[] = [];
    for (let user of users) {
      if(user.id.toString().includes(searchCriteria) || 
      user.firstname.toLowerCase().includes(searchCriteria) ||
      user.lastname.toLowerCase().includes(searchCriteria) ||
      (user.phone != null && user.phone.toLowerCase().includes(searchCriteria)) ||
      (user.email != null && user.email.toLowerCase().includes(searchCriteria))) {
        selUsers.push(user);
      }
    }
    return selUsers;
  }

}
