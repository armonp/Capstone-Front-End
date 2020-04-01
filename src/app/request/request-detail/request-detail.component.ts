import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product/product.service';
import { RequestService } from '../request.service';
import { Request } from '../request';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = new Request();

  delete():void {
    this.requestsvc.remove(this.request).subscribe(
      res=> {
        console.debug("Request deleted successfully ", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("Request delete failed ", err)
      }
    );
  }

  approve(): void {
    this.requestsvc.approve(this.request).subscribe(
      res => {
        confirm("Request approved");
        console.debug("Request approved", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("request delete failed", err)
      }
    );
  }
  
  reject(): void{
    this.request.rejectionReason = prompt("Enter Rejection Reason");
    console.log(this.request.userId);
    if (this.request.rejectionReason == null || this.request.rejectionReason == ""){
      alert("Must enter reasoning to reject request");
    }
    this.requestsvc.reject(this.request).subscribe(
      res => {
        console.debug("Request rejected", res);
        this.router.navigateByUrl("/request/list");
      },
      err => {
        console.error("request delete failed", err)
      }
    );
  }
  
  constructor(
    private route:ActivatedRoute,
    private requestsvc: RequestService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.requestsvc.get(id).subscribe(
      res => {
        this.request = res;
        console.debug("Product: ", res);
      },
      err => {
        console.error("Error on Product.get()", err);
      }
    );
  }

}
