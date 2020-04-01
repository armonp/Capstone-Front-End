import { Component, OnInit } from '@angular/core';
import { Reqline } from '../reqline';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { ReqlineService } from '../reqline.service';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product';

@Component({
  selector: 'app-reqline-create',
  templateUrl: './reqline-create.component.html',
  styleUrls: ['./reqline-create.component.css']
})
export class ReqlineCreateComponent implements OnInit {

  reqline: Reqline = new Reqline();
  requestId:number;
  products: Product[] = [];

  add():void {
    this.reqline.productId = Number(this.reqline.productId);
    this.reqline.requestId = Number(this.requestId);
    this.reqlinesvc.create(this.reqline).subscribe(
      res => {
        console.debug ("Request Line added ", res);
        this.router.navigateByUrl("/request/list");

      },
      err => {
        console.error("Error creating request line ", err);
      }
    );
  }

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private prodsvc: ProductService,
    private reqlinesvc: ReqlineService
  ) { }

  ngOnInit(): void {
    this.requestId = this.route.snapshot.params.requestId;
    this.prodsvc.list().subscribe(
      res => {
        this.products = res;
        console.debug("Products ", res);
      },
      err => {
        console.error("Error reading products ", err);
      }
    );
  }

}
