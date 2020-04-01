import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product/product';
import { Request } from '../request';
import { RequestService } from '../request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/users/users.class';
import { UsersService } from 'src/app/users/users.service';
import { SystemService } from 'src/app/system.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  
  save():void {
    this.request.userId = Number(this.systemsvc.loggedIn.id);
    this.requestsvc.create(this.request).subscribe(
      res => {
        console.debug("Request created", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error creating request ", err);
      }
    );
  }


  constructor(
    private requestsvc: RequestService,
    private router:Router,
    private systemsvc: SystemService,
    private usersvc: UsersService,
    //private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }
}
