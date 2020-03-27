import { Component, OnInit } from '@angular/core';
import { User } from '../users.class';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-detail',
  templateUrl: './users-detail.component.html',
  styleUrls: ['./users-detail.component.css']
})
export class UsersDetailComponent implements OnInit {

  user: User = new User();

  delete():void {
    this.usersvc.remove(this.user).subscribe(
      res => {
        console.debug("User deleted successfully", res);
        this.router.navigateByUrl("/users/list");
      },
      err => {
        console.error("User delete failed ", err)
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private usersvc: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User: ", res);
      },
      err => {
        console.error("Error on User.get()", err);
      }
    );
  }

}
