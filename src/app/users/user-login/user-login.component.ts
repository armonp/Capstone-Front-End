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

  login(): void {
    this.usersvc.login(this.uname, this.pword).subscribe(
      res => {
        //console.debug(res);
        if ( res != null) { 
        this.systemsvc.loggedIn = res;
        this.router.navigateByUrl("/request/list"); //need to change to welcome page once built
        } else {
          alert("Username and/or Password is incorrect");
        }
      },
      err => {
        console.error(err);
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
