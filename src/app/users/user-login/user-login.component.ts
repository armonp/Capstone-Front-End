import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { SystemService } from 'src/app/system.service';
import { User } from '../users.class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User;
  uname:string;
  pword:string;
  message:string = "Ready to Log In";

  login(): void {
    this.usersvc.login(this.uname, this.pword).subscribe(
      res => {
          this.systemsvc.loggedIn = res;
          this.router.navigateByUrl("/request/list"); //need to change to welcome page once built
      },
      err => {
        console.error("Error ", err);
        this.message = "Username and/or Password is incorrect";
      }
    )
  }

  constructor(
    private usersvc: UsersService,
    private router: Router,
    private systemsvc: SystemService
  ) { }

  ngOnInit(): void {
  }

}
