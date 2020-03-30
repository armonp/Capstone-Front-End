import { Component, OnInit } from '@angular/core';
import { Request } from '../request';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestService } from '../request.service';
@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = new Request();
  save(): void {
    this.requestsvc.update(this.request).subscribe(
      res => {
        console.debug("Request change successful!", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Error updating request: ", err);
      }
    );
  }
  constructor(
    private requestsvc:RequestService,
    private router: Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Request: ", res)
      },
      err => {
        console.error("Error editing request", err);
      }
    );
  }

}
