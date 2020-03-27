import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../users.class';

@Component({
  selector: 'app-users-edit',
  templateUrl: './users-edit.component.html',
  styleUrls: ['./users-edit.component.css']
})
export class UsersEditComponent implements OnInit {

  user: User = new User();
  save(): void {
    this.usersvc.update(this.user).subscribe(
      res => {
        console.debug("User change successful!", res);
        this.router.navigateByUrl("users/list");
      },
      err => {
        console.error("Error updating user: ", err);
      }
    );
  }

  constructor(
    private usersvc:UsersService,
    private route:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.usersvc.get(id).subscribe(
      res => {
        this.user = res;
        console.debug("User: ", res)
      },
      err => {
        console.error("Error editing user ", err);
      }
    );
  }

}
