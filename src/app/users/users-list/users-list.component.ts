import { Component, OnInit } from '@angular/core';
import { User } from '../users.class';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string ="";
  
  constructor(
    private user: UsersService
  ) { }

  ngOnInit(): void {
    this.user.list().subscribe(
      res => {
        this.users = res;
        console.debug("User list: ", res)
      },
      err => {console.error(err); 
      }
    )
  }

}
