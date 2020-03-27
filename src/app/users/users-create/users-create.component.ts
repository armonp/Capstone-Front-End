import { Component, OnInit } from '@angular/core';
import { User } from '../users.class';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {

  user: User = new User();

  save():void {
    this.usersvc.create(this.user).subscribe(
      res => {
        console.debug("User created", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error("Error creating user ", err);
      }
    );
  }

  constructor(
    private usersvc:UsersService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
