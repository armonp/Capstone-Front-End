import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Vendor } from 'src/app/vendor/vendor';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];

  save():void {
    this.product.vendorId = Number(this.product.vendorId);
    this.productsvc.create(this.product).subscribe(
      res => {
        console.debug("Product created", res);
        this.router.navigateByUrl("/product/list");
      },
      err => {
        console.error("Error creating product ", err);
      }
    );
  }

  constructor(
    private productsvc:ProductService,
    private router:Router,
    private vendorsvc: VendorService,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    this.vendorsvc.list().subscribe(
      res => {
        this.vendors = res;
        console.debug("Vendors: ", res);
      },
      err => {
        console.error("Error reading vendors", err);
      }
    );
  }
}
