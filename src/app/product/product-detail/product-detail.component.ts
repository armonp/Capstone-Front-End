import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { VendorService } from 'src/app/vendor/vendor.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
s
  product: Product = new Product();

  delete():void {
    this.productsvc.remove(this.product).subscribe(
      res => {
        console.debug("Product deleted successfully", res);
        this.router.navigateByUrl("/products/list");
      },
      err => {
        console.error("Product delete failed ", err)
      }
    );
  }

  constructor(
    private route: ActivatedRoute,
    private productsvc: ProductService,
    private router: Router,
    private vendorsvc: VendorService
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id
    this.productsvc.get(id).subscribe(
      res => {
        this.product = res;
        console.debug("Product: ", res);
      },
      err => {
        console.error("Error on Product.get()", err);
      }
    );
  }

}
