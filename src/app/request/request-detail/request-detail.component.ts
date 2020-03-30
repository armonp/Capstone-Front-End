import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  }

  approve(): void {

  }

  reject(): void{

  }
  
  constructor(
    private route:ActivatedRoute,
    private requestsvc: RequestService
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
